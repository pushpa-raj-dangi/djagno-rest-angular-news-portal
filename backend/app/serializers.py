from math import prod
from pyexpat import model
from re import M
from rest_framework import serializers
from decimal import Decimal
from core.serializers import UserSerializer

from portal.models import AppUser, Category, Comment, Post, Tag

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'posts_count']

    posts_count = serializers.IntegerField(read_only=True)

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'title', 'posts_count']

    posts_count = serializers.IntegerField(read_only=True)

class AppUserSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField()
    class Meta:
        model = AppUser
        fields = ['id','user_id','user','phone','birth_date','first_name']
    








class CommentSerializer(serializers.ModelSerializer):
    user = AppUserSerializer(read_only=True, required=False)
    class Meta:
        model = Comment
        fields = ['id', 'date', 'name', 'description',"post", "user"]

    def create(self, validated_data):
        post_id = self.context['post_id']
        return Comment.objects.create(post_id=post_id, **validated_data)



class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    user = AppUserSerializer(read_only=True)
    image_url = serializers.ImageField(required=False)


    class Meta:
        fields = ['id', 'title', 'description', 'created_at', 'slug','category','tag','user','comments','image_url']
        model = Post
        depth=3
        


class SimplePostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id', 'title']
        model = Post

