class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :titolo
      t.string :autore
      t.string :prezzo
      t.text :desciption

      t.timestamps
    end
  end
end
