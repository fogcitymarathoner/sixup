from django.contrib import admin

import models


class ApplicationAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.Application, ApplicationAdmin)


class CollegeAdmin(admin.ModelAdmin):
    pass
admin.site.register(models.College, CollegeAdmin)
