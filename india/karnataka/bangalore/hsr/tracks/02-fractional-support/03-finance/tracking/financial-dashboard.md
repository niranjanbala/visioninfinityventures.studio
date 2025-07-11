# Financial Dashboard and Tracking

## 📊 **Master Financial Dashboard**

### **Google Sheets Template Structure**

#### **Sheet 1: Overview Dashboard**
```
A1: Vision Infinity Ventures - Financial Overview
A3: Key Metrics
A4: Total Founder Contributions: =SUM('Founder Contributions'!C:C)
A5: Investment Pool Balance: =SUM('Investment Pool'!C:C)
A6: Operating Expenses: =SUM('Expenses'!C:C)
A7: Available Capital: =A4+A5-A6
A8: Founder Count: =COUNTA('Founder Contributions'!A:A)-1
A9: Target Progress: =A4/83000000*100 & "%"
```

#### **Sheet 2: Founder Contributions**
```
A1: Founder Name | B1: Email | C1: Contribution Amount | D1: Date | E1: Status | F1: Payment Method
A2: [Founder Name] | B2: [Email] | C2: ₹83,000 | D2: [Date] | E2: Paid | F2: [Method]
```

#### **Sheet 3: Investment Pool**
```
A1: Date | B1: Description | C1: Amount | D1: Type | E1: Balance
A2: [Date] | B2: Initial Funding | C2: ₹8,30,00,000 | D2: Target | E2: =SUM(C:C)
```

#### **Sheet 4: Operating Expenses**
```
A1: Date | B1: Category | C1: Description | D1: Amount | E1: Approved By | F1: Status
A2: [Date] | B2: Legal | C2: Incorporation Fees | D2: ₹25,000 | E2: [Name] | F2: Paid
```

## 💰 **Founder Contribution Tracking**

### **Template: founder_contributions.csv**
```csv
Founder_ID,Name,Email,Phone,Contribution_Amount,Payment_Date,Payment_Method,Status,Notes
F001,John Doe,john@example.com,+91-98765-43210,83000,2025-01-15,Razorpay,Paid,First batch
F002,Jane Smith,jane@example.com,+91-98765-43211,83000,2025-01-16,UPI,Paid,Referral
F003,Bob Wilson,bob@example.com,+91-98765-43212,83000,2025-01-17,Bank Transfer,Pending,Follow up needed
```

### **Tracking Metrics:**
- **Total Contributors:** =COUNTIF(Status,"Paid")
- **Pending Payments:** =COUNTIF(Status,"Pending")
- **Total Collected:** =SUMIF(Status,"Paid",Contribution_Amount)
- **Collection Rate:** =Total_Collected/(Total_Contributors*83000)*100

## 📈 **Bank Account Reconciliation**

### **Template: bank_reconciliation.xlsx**

#### **Sheet 1: Account Summary**
```
Account Name | Account Number | Bank | Balance | Last Updated
Main Current | XXXX-XXXX-1234 | HDFC | ₹50,000 | 2025-01-20
Founder Pool | XXXX-XXXX-5678 | HDFC | ₹8,30,000 | 2025-01-20
Investment | XXXX-XXXX-9012 | HDFC | ₹4,15,00,000 | 2025-01-20
Reserve | XXXX-XXXX-3456 | Kotak | ₹25,000 | 2025-01-20
```

#### **Sheet 2: Transaction Log**
```
Date | Account | Description | Debit | Credit | Balance | Category | Reference
2025-01-15 | Main Current | Founder Contribution | 0 | 83000 | 83000 | Founder | F001
2025-01-16 | Main Current | Legal Fees | 25000 | 0 | 58000 | Legal | LF001
```

## 📈 **Investment Portfolio Tracking**

### **Template: investment_portfolio.xlsx**

#### **Sheet 1: Portfolio Overview**
```
Company | Sector | Investment Date | Amount | Equity % | Current Value | ROI | Status
Startup A | SaaS | 2025-02-01 | 500000 | 10% | 750000 | 50% | Active
Startup B | Fintech | 2025-02-15 | 750000 | 15% | 600000 | -20% | Active
```

#### **Sheet 2: Investment Criteria**
```
Criteria | Weight | Description | Scoring Method
Market Size | 25% | TAM > ₹8,300 Crore | 1-10 scale
Team Quality | 30% | Founder experience | 1-10 scale
Product | 20% | MVP readiness | 1-10 scale
Competition | 15% | Competitive advantage | 1-10 scale
Financials | 10% | Unit economics | 1-10 scale
```

## 💸 **Expense Management**

### **Template: expense_tracker.xlsx**

#### **Sheet 1: Expense Categories**
```
Category | Budget | Spent | Remaining | % Used
Legal | 100000 | 25000 | 75000 | 25%
Banking | 50000 | 5000 | 45000 | 10%
Marketing | 75000 | 15000 | 60000 | 20%
Operations | 50000 | 10000 | 40000 | 20%
Technology | 100000 | 20000 | 80000 | 20%
```

#### **Sheet 2: Expense Log**
```
Date | Category | Description | Amount | Approved By | Receipt | Status
2025-01-15 | Legal | Incorporation | 25000 | CEO | Yes | Paid
2025-01-16 | Banking | Account Opening | 5000 | CFO | Yes | Paid
2025-01-17 | Marketing | Website Design | 15000 | CMO | Yes | Pending
```