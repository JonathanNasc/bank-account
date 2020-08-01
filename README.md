# Jonathan's bank balance account master solution

## Setup
1. Install nodejs (version recommended 13.12.0)
1. Install TypeScript (version recommended 3.9.7)
1. Install dependencies `npm install`
1. Start the server `npm start`

## API

### Reset state before starting tests

POST /reset

### Create account with initial balance

POST /event {"type":"deposit", "destination":"100", "amount":10}

### Deposit into existing account

POST /event {"type":"deposit", "destination":"100", "amount":10}

### Withdraw from non-existing account

POST /event {"type":"withdraw", "origin":"200", "amount":10}

### Withdraw from existing account

POST /event {"type":"withdraw", "origin":"100", "amount":5}

### Transfer from existing account

POST /event {"type":"transfer", "origin":"100", "amount":15, "destination":"300"}

### Get balance for existing account

GET /balance?account_id=100
