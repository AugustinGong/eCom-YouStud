class Book < ApplicationRecord
    validates :titolo, presence: true, length: {minimum: 6, maximum: 100}
    validates :prezzo, presence: true
    validates :desciption, presence: true, length: {minimum:10, maximum:300}
end
