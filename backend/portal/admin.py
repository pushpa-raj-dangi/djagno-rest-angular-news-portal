
from django.utils.html import format_html, urlencode
from django.db.models import Count

from django.contrib import admin
from django.urls import reverse
from .models import AppUser, Category, Comment, Post, Tag

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    autocomplete_fields = ['category']
    prepopulated_fields = {
        'slug':['title']
    }
    list_display = ['title','category_title','tag_title']
    search_fields = ['title']
    list_filter = ['category','last_update']
    list_per_page = 10
    list_select_related = ['category']
    
    def category_title(self,post):
        return post.category.title
    def tag_title(self,post):
        return post.category.title



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    autocomplete_fields = ['featured_post']
    list_display = ['title', 'posts_count']
    search_fields = ['title']

    @admin.display(ordering='posts_count')
    def posts_count(self, post):
        url = (
            reverse('admin:portal_post_changelist')
            + '?'
            + urlencode({
                'post__id': str(post.id)
            }))
        return format_html('<a href="{}">{} Posts</a>', url, post.posts_count)

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(
            posts_count=Count('posts')
        )

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    autocomplete_fields = ['featured_post']
    list_display = ['title', 'posts_count']
    search_fields = ['title']

    @admin.display(ordering='posts_count')
    def posts_count(self, post):
        url = (
            reverse('admin:portal_post_changelist')
            + '?'
            + urlencode({
                'post__id': str(post.id)
            }))
        return format_html('<a href="{}">{} Posts</a>', url, post.posts_count)

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(
            posts_count=Count('posts')
        )

        
@admin.register(AppUser)
class AppUserAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name']
    list_per_page = 10
    list_select_related = ['user']
    search_fields = ['first_name__istartwith', 'last_name__istartwith']

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    list_per_page = 10
    list_select_related = ['user']
    search_fields = ['name__istartwith', 'description__istartwith']