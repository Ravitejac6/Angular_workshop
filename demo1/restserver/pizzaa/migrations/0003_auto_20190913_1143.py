# Generated by Django 2.2.5 on 2019-09-13 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizzaa', '0002_auto_20190913_1141'),
    ]

    operations = [
        migrations.AlterField(
            model_name='topping',
            name='image',
            field=models.ImageField(upload_to='toppings/'),
        ),
    ]
