# Generated by Django 4.0.3 on 2022-04-06 14:15

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0003_tag'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2022, 4, 6, 14, 15, 30, 191953, tzinfo=utc)),
            preserve_default=False,
        ),
    ]