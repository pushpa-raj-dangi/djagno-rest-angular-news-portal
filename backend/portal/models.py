from operator import mod
from pyexpat import model
from django.db import models
from django.conf import settings

# Create your models here.


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Category(models.Model):
    title = models.CharField(max_length=255)
    featured_post = models.ForeignKey('Post', on_delete=models.SET_NULL,null=True,  related_name='+')
    def __str__(self)-> str:
        return  self.title

    class Meta:
        ordering = ['title']


class Tag(models.Model):
    title = models.CharField(max_length=255)
    featured_post = models.ForeignKey('Post', on_delete=models.SET_NULL,null=True,  related_name='+')
    def __str__(self)-> str:
        return  self.title

    class Meta:
        ordering = ['title']


class AppUser(models.Model):
    phone = models.CharField(max_length=255)
    birth_date = models.DateField(null=True,blank=True)

    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    
    def first_name(self):
        return self.user.first_name
    
    def last_name(self):
        return self.user.last_name
    
    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'
    
    class Meta:
        ordering =['user__first_name','user__last_name']



class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    description = models.TextField(null=True,blank=True)
    last_update = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='posts')
    tag = models.ForeignKey(Tag, on_delete=models.PROTECT, related_name='posts')
    user = models.ForeignKey(AppUser, on_delete=models.PROTECT,related_name='post_author')
    
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)


    def __str__(self)->str :
        return self.title
    

class Comment(models.Model):
    post = models.ForeignKey(Post,on_delete=models.CASCADE, related_name="comments",  null=True)
    user = models.ForeignKey(AppUser,on_delete=models.CASCADE, related_name="comment_user")
    name = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField(auto_now_add=True)




