# Generated by Django 4.0.4 on 2022-04-13 18:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo_app', '0002_rename_list_tasklist'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='list',
            new_name='taskList',
        ),
    ]
