import json

from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny


from applicant import models


class CollegeSerializer(serializers.Serializer):
    """"""
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        """
        Create and return a new `College` instance, given the validated data.
        """
        return models.College.objects.get_or_create(**validated_data)


class UserSerializer(serializers.Serializer):
    """"""
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)
    password = serializers.CharField()
    email = serializers.CharField()

    def create(self, validated_data):
        """
        Create and return a new `User` instance, given the validated data.
        """
        return User.objects.create(**validated_data)


class UserUpdateSerializer(serializers.Serializer):
    """"""
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)
    email = serializers.CharField(required=False)

    def update(self, instance, validated_data):
        """
        Update and return an existing `User` instance, given the validated data.
        """
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance


class UserDetail(generics.ListAPIView):
    """"""
    serializer_class = UserSerializer

    def get_queryset(self):
        """
        This view should return a list of all the applications
        for the currently authenticated user.
        """
        return [self.request.user]


class UserList(APIView):
    """
    List all users, or create a new user.
    """

    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        """return list with just one user, the requesting user."""
        users = [request.user]
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """Register a user"""

        user, _ = User.objects.get_or_create(username=request.data['username'], email=request.data['email'])
        user.set_password(request.data['password'])

        serializer = UserSerializer(data=[user])

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserUpdate(APIView):
    """
    Update user.
    """

    def put(self, request, pk, format=None):
        user = User.objects.get(pk=pk)
        serializer = UserUpdateSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ApplicationSerializer(serializers.Serializer):

    college = CollegeSerializer(read_only=True)
    user = UserSerializer(read_only=True)


class ApplicationDetail(generics.ListAPIView):
    """"""
    serializer_class = ApplicationSerializer

    def get(self, request, pk, format=None):
        serializer = ApplicationSerializer([models.Application.objects.get(pk=pk)], many=True)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        app = models.Application.objects.get(pk=pk)

        app.college.name = request.data['college_name']
        app.college.save()
        serializer = UserUpdateSerializer(app, data=request.data)
        if serializer.is_valid():
            app.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ApplicationList(generics.ListAPIView):
    serializer_class = ApplicationSerializer

    def get_queryset(self):
        """
        This view should return a list of all the applications
        for the currently authenticated user.
        """
        return models.Application.objects.filter(user=self.request.user)

    def get(self, request, format=None):
        """return list with just one user, the requesting user."""
        apps = self.get_queryset()
        serializer = ApplicationSerializer(apps, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        college, _ = models.College.objects.get_or_create(name=request.data['college_name'])
        application, _ = models.Application.objects.get_or_create(user=request.user, college=college)
        apps = self.get_queryset()
        serializer = ApplicationSerializer(apps, many=True)
        return Response(serializer.data)
