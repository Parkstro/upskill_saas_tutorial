class UsersController < ApplicationController
    before_acton :authenticate_user!
    
    def index
       @users = User.all 
    end
    
    # GET to users/:id
    def show 
        @user = User.find( params[:id] )
    end
end