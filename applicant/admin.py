from django.contrib import admin

from applicant import models


class ApplicationAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.Application, ApplicationAdmin)


class CollegeAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.College, CollegeAdmin)
