class PagesController < ApplicationController
  
  def index
    news = News.new("e7dad9c79cdd45be9f24d8ac4b2b371c")
    @news = news.get_top_headlines(country: 'us', category: 'technology')
  end
end
