# Generated by Django 4.0.3 on 2022-04-09 12:24

from django.db import migrations, models
import django.db.models.deletion
import portal.models


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0009_post_user_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image_url',
            field=models.ImageField(blank=True, null=True, upload_to=portal.models.upload_to),
        ),
        migrations.AlterField(
            model_name='post',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='post_author', to='portal.appuser'),
        ),
    ]