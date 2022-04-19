# Generated by Django 4.0.3 on 2022-04-06 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0002_rename_product_post_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('featured_post', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='portal.post')),
            ],
            options={
                'ordering': ['title'],
            },
        ),
    ]
