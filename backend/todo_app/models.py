from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    def __str__(self):
        return f'{self.username}'

class TaskList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='lists')
    name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.user.username}'s {self.name} list"


class Task(models.Model):
    name = models.CharField(max_length=255)
    taskList = models.ForeignKey(TaskList, on_delete=models.CASCADE, related_name='tasks')
    completed = models.BooleanField(default=False)
    due_date = models.DateField(auto_now=False, auto_now_add=False)

    class Meta:
        ordering = ['due_date']

    def __str__(self):
        return f"{self.taskList}, Task: {self.name}"

    
