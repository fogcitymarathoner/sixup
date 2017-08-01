from django.db import models
from django.contrib.auth.models import User


class College(models.Model):
    """College"""
    name = models.CharField(max_length=10, unique=True)


class Application(models.Model):
    """College Application"""
    user = models.ForeignKey(User)
    college = models.ForeignKey(College)
