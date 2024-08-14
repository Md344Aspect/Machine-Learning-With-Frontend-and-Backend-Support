# ML Type - Backend

## Setup and Start-Up

1. Create a VET and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate
    ## Windows ##
    use `venv\Scripts\activate`
    ```

2. Install the Libs:
    ```bash
    pip install -r requirements.txt
    ```

3. Train and save ML Model:
    ```bash
    python model.py
    ```

4. Start the Backend / Flask server:
    ```bash
    python app.py
    ```

## API Endpoint

**POST /predict**

- **Request Body:**
    ```json
    {
        "features": [5.1, 3.5, 1.4, 0.2]
    }
    ```

- **Response:**
    ```json
    {
        "prediction": 0
    }
    ```
