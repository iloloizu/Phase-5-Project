class SneakersController < ApplicationController

    skip_before_action :authorize, only: :create
  
    def index 
        render json: Sneaker.all, status: :ok
    end

    def show
        sneaker = Sneaker.find(params[:id]) 
        render json: sneaker, status: :ok
    end

    def update
        find_sneaker = Sneaker.find(params[:id])
        find_sneaker.update!(sneaker_params)
        render json: find_sneaker, status: :ok
    end

    def create
        sneaker = Sneaker.create!(sneaker_params)
        render json: sneaker, status: :created
    end

    def destroy
        find_sneaker = Sneaker.find(params[:id])
        find_sneaker.destroy
        render json {}
    end

    private

    def sneaker_params
        params.permit(:name, :colorway, :description, :price, :image, :link, :brand)
    end
end
