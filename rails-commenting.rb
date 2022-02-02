# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Build a class called BlogPostsController and it inherits the methods of ApplicationController. Such as the logic methods for the RESTful routes.
class BlogPostsController < ApplicationController
  def index
    # ---2)create an instance, store all the data from table BlogPost
    @posts = BlogPost.all
  end

  def show
    # ---3)create a single instance, use find to search the object by ID and store it in the instance in the url.
    @post = BlogPost.find(params[:id])
  end

  # ---4)(a method named new)----use new to create a empty hash object and store it in the instance.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)create a valid object with strong strict param . will "POST"
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) this edit method will be responsible for edit a hash object by ID
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)update the object by strong strict blog_post_params argument
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)if it doesn't delete successfully, it will reroute page to blog_post path
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)anything below key word private will only can be accessable within class BlogPostsController
  private
  def blog_post_params
    # ---10)The params requires an argument :blog_post object, and returns values pertaining :title and :content. Allows the user access to a set of information in the table.
    params.require(:blog_post).permit(:title, :content)
  end
end
