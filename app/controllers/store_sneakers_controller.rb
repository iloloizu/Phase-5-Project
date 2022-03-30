class StoreSneakersController < ApplicationController

    skip_before_action :authorize, only: :create
  
    def index 
        render json: StoreSneaker.all, status: :ok
    end

    def show
        sneaker = StoreSneaker.find(params[:id]) 
        render json: sneaker, status: :ok
    end

    def update
        find_sneaker = StoreSneaker.find(params[:id])
        find_sneaker.update!(store_sneaker_params)
        render json: find_sneaker, status: :ok
    end

    def create
        sneaker = StoreSneaker.create!(store_sneaker_params)
        render json: sneaker, status: :created
    end

    def destroy
        find_sneaker = StoreSneaker.find(params[:id])
        find_sneaker.destroy
        render json {}
    end

    private

    def store_sneaker_params
        params.permit(:name, :colorway, :description, :price, :image, :link, :brand)
    end
end
