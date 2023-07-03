import os
import mysql.connector
import time


DB_HOST = "localhost"
DB_USER = "root"
DB_PASSWORD = "Lala-2023"
DB_NAME = "flightdb"
DB_PORT = "3306"

# Establish the database connection
max_retries = 2
retry_interval = 10  # seconds


class DataManager:
    def __init__(self):
        self.db = self.establish_db_connection()
        self.dest_info = []
        self.cx_info = []



    def establish_db_connection(self):
        for attempt in range(max_retries):
            try:
                # Attempt to establish the MySQL database connection
                self.db = mysql.connector.connect(
                    host=DB_HOST,
                    user=DB_USER,
                    password=DB_PASSWORD,
                    database=DB_NAME,
                    port=DB_PORT
                )
                return self.db

            except mysql.connector.Error as e:
                # Check if retry conditions are met
                if attempt < max_retries - 1:
                    # Calculate next retry interval (e.g., fixed interval)
                    retry_delay = retry_interval

                    # Wait for the retry interval
                    time.sleep(retry_delay)

    def get_dest_info(self):
        # Retrieve data from the MySQL database
        cursor = self.db.cursor()
        cursor.execute("SELECT * FROM prices")
        self.dest_info = cursor.fetchall()
        cursor.close()
        return self.dest_info

    def update_dest_info_iata(self):
        # Update data in the MySQL database
        cursor = self.db.cursor()
        for dest in self.dest_info:
            sql = "UPDATE prices SET IATA = %s WHERE id = %s"
            val = (dest[2], dest[0])
            cursor.execute(sql, val)
            db.commit()
        cursor.close()

    # def get_cx_info(self):
    #     # Retrieve data from the MySQL database
    #     cursor = db.cursor()
    #     cursor.execute("SELECT * FROM users")
    #     self.cx_info = cursor.fetchall()
    #     cursor.close()
    #     return self.cx_info
    #     gitlab test

# data_manager = DataManager()
# response = data_manager.get_dest_info()
# print(response)
