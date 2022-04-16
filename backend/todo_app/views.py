from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *
from .views_auth import *
from rest_framework import permissions

class TaskListView(ModelViewSet):
    serializer_class = TaskListSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return TaskList.objects.filter(user=self.request.user)

class TaskView(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        return (permissions.IsAdminUser())

