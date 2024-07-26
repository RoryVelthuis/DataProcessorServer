import sys
import json
import logging

def process_data(data):
    # Example processing
    result = {"output": data["input"] * 2}
    logging.info(f"Processed data: {result}")  # Log the processed data
    return result
    
if __name__ == '__main__':
    # Configure logging
    # Configure logging to log to a file
    logging.basicConfig(
        filename='app.log',  # Log file name
        filemode='a',        # Append mode
        level=logging.INFO,  # Log level
        format='%(asctime)s - %(levelname)s - %(message)s'  # Log format
    )
    logging.info("Starting data processing")
    
    try:
        input_data = json.loads(sys.stdin.read())
        logging.info(f"Input data: {input_data}")  # Log the input data
        output_data = process_data(input_data)
        print(json.dumps(output_data))
    except Exception as e:
        logging.error(f"Error processing data: {e}")