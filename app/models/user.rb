# == Schema Information
#
# Table name: users
#
#  id                 :integer         not null, primary key
#  name               :string(255)
#  email              :string(255)
#  created_at         :datetime
#  updated_at         :datetime
#  encrypted_password :string(255)
#
require 'digest'
class User < ActiveRecord::Base
  attr_accessor :password
  attr_accessible :name, :email, :password, :password_confirmation

  before_save :encrypt_password

  validates :name, :presence => true,
    		   :length => { :maximum => 50 }
  validates :email, :presence => true,
    	    	    :format => { :with => /\A[\w\-]+@[\w\d\-]+\.[\w]+\Z/i },
  	    	    :uniqueness => true
  validates :password,  :presence 	=> true,
   			:confirmation	=> true,
		        :length		=> { :within => 6..40 }	
  def has_password?(submitted_password)
    encrypted_password == encrypt(submitted_password)
  end

  def self.authenticate(email, submitted_password)
    user = find_by_email(email)
    return nil  if user.nil?
    return user if user.has_password?(submitted_password)
  end

  private
  
    def encrypt_password
      self.encrypted_password = encrypt(password)
    end

    def encrypt(string)
      Digest::SHA2.hexdigest(string)
    end
end
