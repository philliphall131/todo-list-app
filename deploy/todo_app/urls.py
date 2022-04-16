from django.urls import path, include
from rest_framework import routers
from .views import *

r = routers.DefaultRouter()
r.register("lists", TaskListView, basename="list")
r.register("tasks", TaskView, basename="task")
r.register('users', UserViewSet, basename='user')

urlpatterns = [
    path('', send_the_homepage),
    path("api/", include(r.urls)),
    path('api/logout/', handle_logout),
    path('api/login/', handle_login),
    path('api/whoami/', who_am_i)
]