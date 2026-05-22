import { ExpenseSettlementTestCase } from "./test-case";

export const expenseSettlementTestCases: ExpenseSettlementTestCase[] = [
  {
    "id": 1,
    "moduleName": "Auth & Profile",
    "testScenario": "Grade/Band Resolution",
    "testCaseDescription": "Verify system resolves authenticated employee's grade band and promoter flag on page load",
    "expectedResult": "Employee profile attributes (grade band promoter flag) are correctly loaded and displayed",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 2,
    "moduleName": "Auth & Profile",
    "testScenario": "Policy Assignment - Officer",
    "testCaseDescription": "Login as M-band employee and verify Officer policy (SRF/PP/23/2.1) is applied",
    "expectedResult": "Officer entitlements DA rates and rules are enforced",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 3,
    "moduleName": "Auth & Profile",
    "testScenario": "Policy Assignment - NMS",
    "testCaseDescription": "Login as NMS staff/JO employee and verify HO/NMS policy is applied",
    "expectedResult": "NMS entitlements flat DA rates and rules are enforced",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 4,
    "moduleName": "Auth & Profile",
    "testScenario": "Promoter Flag Detection",
    "testCaseDescription": "Login as promoter-flagged employee",
    "expectedResult": "Promoter flag is detected and entitlement caps are bypassed",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 5,
    "moduleName": "Auth & Profile",
    "testScenario": "IDOR Prevention",
    "testCaseDescription": "Attempt to access another employee's Tour Plan via direct URL manipulation",
    "expectedResult": "HTTP 403 returned and no data displayed for other employee's records",
    "priority": "P0 Critical",
    "testType": "Security"
  },
  {
    "id": 6,
    "moduleName": "Tour Plan List",
    "testScenario": "Approved TPs Displayed",
    "testCaseDescription": "Verify only approved Tour Plans with pending settlement status are listed",
    "expectedResult": "Only approved pending-settlement TPs appear in the list",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 7,
    "moduleName": "Tour Plan List",
    "testScenario": "Submitted TP Non-Selectable",
    "testCaseDescription": "Attempt to select a TP with status Submitted or Approved",
    "expectedResult": "TP is greyed out or not selectable for new expense entry",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 8,
    "moduleName": "Tour Plan List",
    "testScenario": "TP Display Details",
    "testCaseDescription": "Verify each TP shows TP Number Travel Dates Destination Status Days on Tour",
    "expectedResult": "All five fields are displayed correctly",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 9,
    "moduleName": "Tour Plan List",
    "testScenario": "Deadline Countdown - Officer",
    "testCaseDescription": "Login as Officer and view TP list for a TP with 10 days remaining of 30-day deadline",
    "expectedResult": "Countdown or indicator shows days remaining",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 10,
    "moduleName": "Tour Plan List",
    "testScenario": "Deadline Countdown - NMS",
    "testCaseDescription": "Login as NMS employee and view TP with 3 days remaining of 7-day deadline",
    "expectedResult": "Countdown or indicator shows days remaining",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 11,
    "moduleName": "Tour Plan List",
    "testScenario": "Overdue Warning Banner",
    "testCaseDescription": "Open settlement form for a TP past the submission deadline",
    "expectedResult": "Warning banner displayed indicating deadline has passed",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 12,
    "moduleName": "Tour Plan List",
    "testScenario": "Draft/Rejected TP Hidden",
    "testCaseDescription": "Create a TP in Draft or Rejected status",
    "expectedResult": "TP does not appear in expense entry screen list",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 13,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Required Fields Validation",
    "testCaseDescription": "Leave From City To City Travel Mode Date or Amount blank and try to save",
    "expectedResult": "Field-level error - This field is required - shown and save blocked",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 14,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Valid Entry Save",
    "testCaseDescription": "Fill all mandatory fields with valid data and save",
    "expectedResult": "Entry saved successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 15,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Self-Booking Surcharge",
    "testCaseDescription": "Enter a self-booked ticket where company did not book",
    "expectedResult": "Rs.50 surcharge automatically added to ticket amount",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 16,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Road/Self-Drive Bill Flag",
    "testCaseDescription": "Select Road or Self-Drive as mode of travel",
    "expectedResult": "Bill flag automatically set to Y",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 17,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Travel Class Within Entitlement (M1-M3)",
    "testCaseDescription": "M1-M3 employee selects Economy air or III AC train",
    "expectedResult": "Entry accepted and saved",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 18,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Travel Class Exceeds Entitlement (M1-M3)",
    "testCaseDescription": "M1-M3 employee selects Business Class air",
    "expectedResult": "Hard block - Selected travel class is not within your entitlement",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 19,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Air Travel 8-Hour Rule (M1-M3)",
    "testCaseDescription": "M1-M3 employee selects air travel without 8-hour alternate mode justification",
    "expectedResult": "Soft warning displayed about 8-hour rule",
    "priority": "P1 High",
    "testType": "Validation"
  },
  {
    "id": 20,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Travel Class - NMS Staff",
    "testCaseDescription": "NMS Staff employee attempts to select air travel",
    "expectedResult": "Hard block - air travel not entitled",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 21,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Travel Class - NMS JO1",
    "testCaseDescription": "JO1 employee selects 3rd AC Sleeper or Deluxe Bus",
    "expectedResult": "Entry saved successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 22,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Mode Deviation with Approval Ref",
    "testCaseDescription": "Select higher class than entitlement with Process Head approval reference number",
    "expectedResult": "Entry saved and flagged for elevated approval",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 23,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Mode Deviation without Approval Ref",
    "testCaseDescription": "Select higher class than entitlement without approval reference",
    "expectedResult": "System requires approval reference number",
    "priority": "P1 High",
    "testType": "Validation"
  },
  {
    "id": 24,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Expense Date Outside Tour Period",
    "testCaseDescription": "Enter a travel date outside the TP start/end range",
    "expectedResult": "Hard block - Expense date must be within your tour period",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 25,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Amount Zero or Negative",
    "testCaseDescription": "Enter amount as 0 or -500",
    "expectedResult": "Hard block - Please enter a valid amount",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 26,
    "moduleName": "Ticket (TKT) Entry",
    "testScenario": "Amount Exceeds Max",
    "testCaseDescription": "Enter amount greater than Rs.9999999",
    "expectedResult": "Hard block - Please enter a valid amount",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 27,
    "moduleName": "Accommodation (STY) Entry",
    "testScenario": "Required Fields Validation",
    "testCaseDescription": "Leave City Stay Type Check-in Check-out or Cost blank",
    "expectedResult": "Field-level error shown and save blocked",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 28,
    "moduleName": "Accommodation (STY) Entry",
    "testScenario": "Check-out Before Check-in",
    "testCaseDescription": "Enter check-out date earlier than check-in date",
    "expectedResult": "Hard block - Check-out must be after check-in date",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 29,
    "moduleName": "Accommodation (STY) Entry",
    "testScenario": "Cost Within Limit - M1-M3 A+ City",
    "testCaseDescription": "Enter Rs.5500/night for M1-M3 band in A+ city (Mumbai/Delhi)",
    "expectedResult": "Entry saved successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 30,
    "moduleName": "Accommodation (STY) Entry",
    "testScenario": "Cost Exceeds Limit - M1-M3 A+ City",
    "testCaseDescription": "Enter Rs.6000/night for M1-M3 band in A+ city",
    "expectedResult": "Hard block - Amount exceeds your accommodation entitlement of Rs.5500 for this city",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 31,
    "moduleName": "Accommodation (STY) Entry",
    "testScenario": "Cost Within Limit - M4-M5 A City",
    "testCaseDescription": "Enter Rs.7000/night for M4-M5 band in A city (Jaipur/Lucknow)",
    "expectedResult": "Entry saved successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 32,
    "moduleName": "Accommodation (STY) Entry",
    "testScenario": "Cost Within Limit - M6-M7 B City",
    "testCaseDescription": "Enter Rs.7000/night for M6-M7 band in B city",
    "expectedResult": "Entry saved successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 33,
    "moduleName": "Accommodation (STY) Entry",
    "testScenario": "Corporate Tie-Up Hotel Bypass",
    "testCaseDescription": "Select a corporate tie-up hotel with cost exceeding band limit",
    "expectedResult": "Entry saved without limit check",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 34,
    "moduleName": "Accommodation (STY) Entry",
    "testScenario": "Promoter Employee Bypass",
    "testCaseDescription": "Promoter-flagged employee enters cost exceeding standard limit",
    "expectedResult": "Entry saved and entitlement caps bypassed",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 35,
    "moduleName": "Accommodation (STY) Entry",
    "testScenario": "Own Arrangement Stay",
    "testCaseDescription": "Select Own Arrangement as stay type",
    "expectedResult": "Flat allowance applicable per DA table",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 36,
    "moduleName": "Cab (CAB) Entry",
    "testScenario": "Valid Entry",
    "testCaseDescription": "Enter Date Mode of Transport and Cost within tour period",
    "expectedResult": "Entry saved successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 37,
    "moduleName": "Cab (CAB) Entry",
    "testScenario": "Full-Day Taxi - M1-M3 No Justification",
    "testCaseDescription": "M1-M3 employee selects full-day taxi without adding justification remarks",
    "expectedResult": "Soft warning - Full-day taxi for your band requires a justification",
    "priority": "P1 High",
    "testType": "Validation"
  },
  {
    "id": 38,
    "moduleName": "Cab (CAB) Entry",
    "testScenario": "Full-Day Taxi - M1-M3 With Justification",
    "testCaseDescription": "M1-M3 employee selects full-day taxi and adds justification",
    "expectedResult": "Entry saved with warning acknowledged",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 39,
    "moduleName": "Cab (CAB) Entry",
    "testScenario": "Full-Day Taxi - M4-M7",
    "testCaseDescription": "M4-M7 employee selects full-day taxi",
    "expectedResult": "Entry saved without restriction",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 40,
    "moduleName": "Cab (CAB) Entry",
    "testScenario": "Amount Zero",
    "testCaseDescription": "Enter cost as Rs.0",
    "expectedResult": "Hard block - Enter a valid amount greater than zero",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 41,
    "moduleName": "Cab (CAB) Entry",
    "testScenario": "Date Outside Tour Period",
    "testCaseDescription": "Enter a cab date outside TP date range",
    "expectedResult": "Hard block - Expense date must be within your tour period",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 42,
    "moduleName": "Miscellaneous (MSC) Entry",
    "testScenario": "Valid Entry",
    "testCaseDescription": "Enter Date reimbursable Expense Type and Cost",
    "expectedResult": "Entry saved successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 43,
    "moduleName": "Miscellaneous (MSC) Entry",
    "testScenario": "Non-Reimbursable Type - Alcohol",
    "testCaseDescription": "Select Alcohol (Self) as expense type",
    "expectedResult": "Hard block - This expense type is not reimbursable under company policy",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 44,
    "moduleName": "Miscellaneous (MSC) Entry",
    "testScenario": "Non-Reimbursable Type - Cigarettes",
    "testCaseDescription": "Select Cigarettes (Self) as expense type",
    "expectedResult": "Hard block - This expense type is not reimbursable under company policy",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 45,
    "moduleName": "Miscellaneous (MSC) Entry",
    "testScenario": "12-Hour Train Meal Allowance",
    "testCaseDescription": "Enter meal allowance for 12-hr train journey",
    "expectedResult": "Rs.150/day meal allowance permitted",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 46,
    "moduleName": "Miscellaneous (MSC) Entry",
    "testScenario": "Train Snacks/Water Only",
    "testCaseDescription": "Enter meal allowance for train providing snacks/water",
    "expectedResult": "Only Rs.50 allowance permitted",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 47,
    "moduleName": "Miscellaneous (MSC) Entry",
    "testScenario": "Book Allowance - Long Distance",
    "testCaseDescription": "Enter book allowance for greater than 250 km trip",
    "expectedResult": "Rs.500 on initiation plus Rs.500 per 7-day period allowed",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 48,
    "moduleName": "Miscellaneous (MSC) Entry",
    "testScenario": "Entertainment - Non-Employee with BLT Ref",
    "testCaseDescription": "Enter entertainment for non-company employees with BLT approval reference",
    "expectedResult": "Entry saved with reference",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 49,
    "moduleName": "Miscellaneous (MSC) Entry",
    "testScenario": "Entertainment - Non-Employee without BLT Ref",
    "testCaseDescription": "Enter entertainment for non-company employees without BLT reference",
    "expectedResult": "System requires approval reference number",
    "priority": "P1 High",
    "testType": "Validation"
  },
  {
    "id": 50,
    "moduleName": "Miscellaneous (MSC) Entry",
    "testScenario": "Training Trip - MSC Entry Blocked",
    "testCaseDescription": "Trip type is Training and attempt to add misc self-expense",
    "expectedResult": "Entry blocked as company bears all costs",
    "priority": "P2",
    "testType": "Business Rule"
  },
  {
    "id": 51,
    "moduleName": "Document Upload",
    "testScenario": "Valid PDF Upload",
    "testCaseDescription": "Upload a PDF file less than 1 MB",
    "expectedResult": "File uploaded successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 52,
    "moduleName": "Document Upload",
    "testScenario": "Valid JPG Upload",
    "testCaseDescription": "Upload a JPG file less than 1 MB",
    "expectedResult": "File uploaded successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 53,
    "moduleName": "Document Upload",
    "testScenario": "Valid PNG Upload",
    "testCaseDescription": "Upload a PNG file less than 1 MB",
    "expectedResult": "File uploaded successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 54,
    "moduleName": "Document Upload",
    "testScenario": "Invalid File Type - DOCX",
    "testCaseDescription": "Upload a .docx file",
    "expectedResult": "Hard block - Only PDF JPG JPEG and PNG files are allowed",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 55,
    "moduleName": "Document Upload",
    "testScenario": "Invalid File Type - ZIP",
    "testCaseDescription": "Upload a .zip file",
    "expectedResult": "Hard block - Only PDF JPG JPEG and PNG files are allowed",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 56,
    "moduleName": "Document Upload",
    "testScenario": "Invalid File Type - XLSX",
    "testCaseDescription": "Upload a .xlsx file",
    "expectedResult": "Hard block - Only PDF JPG JPEG and PNG files are allowed",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 57,
    "moduleName": "Document Upload",
    "testScenario": "File Size Exceeds 1 MB",
    "testCaseDescription": "Upload a 2 MB PDF file",
    "expectedResult": "Hard block - File size must not exceed 1 MB",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 58,
    "moduleName": "Document Upload",
    "testScenario": "Max 2 Files - Third File Rejected",
    "testCaseDescription": "Upload 2 files successfully then attempt a third",
    "expectedResult": "Third file rejected - A maximum of 2 documents can be attached per entry",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 59,
    "moduleName": "Document Upload",
    "testScenario": "Server-Side MIME Validation",
    "testCaseDescription": "Rename a .exe file to .pdf and upload",
    "expectedResult": "Server rejects file after MIME/magic byte validation",
    "priority": "P0 Critical",
    "testType": "Security"
  },
  {
    "id": 60,
    "moduleName": "Document Upload",
    "testScenario": "Blob Merge on Save",
    "testCaseDescription": "Save an expense entry with 2 uploaded files",
    "expectedResult": "Files merged into a single PDF in Azure Blob Storage",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 61,
    "moduleName": "DA Calculation",
    "testScenario": "Full Day DA (>12 hrs)",
    "testCaseDescription": "Tour duration greater than 12 hours but less than 24 hours",
    "expectedResult": "Full DA payable for that block",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 62,
    "moduleName": "DA Calculation",
    "testScenario": "Half DA (>6 hrs and <=12 hrs)",
    "testCaseDescription": "Tour fraction greater than 6 hours but less than or equal to 12 hours",
    "expectedResult": "Half DA payable",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 63,
    "moduleName": "DA Calculation",
    "testScenario": "No DA (<=6 hrs)",
    "testCaseDescription": "Tour fraction less than or equal to 6 hours",
    "expectedResult": "No DA payable (Rs.0)",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 64,
    "moduleName": "DA Calculation",
    "testScenario": "Exact 24 Hours",
    "testCaseDescription": "Tour duration exactly 24 hours",
    "expectedResult": "1 full day DA payable",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 65,
    "moduleName": "DA Calculation",
    "testScenario": "Leave Deduction - Full Day",
    "testCaseDescription": "Approved full-day leave during tour",
    "expectedResult": "DA deducted for each full leave day",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 66,
    "moduleName": "DA Calculation",
    "testScenario": "Leave Deduction - Partial Day",
    "testCaseDescription": "Approved half-day leave during tour",
    "expectedResult": "DA deducted proportionally",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 67,
    "moduleName": "DA Calculation",
    "testScenario": "Company Hotel - DA Reduced",
    "testCaseDescription": "Company provides hotel stay",
    "expectedResult": "DA reduced and only food component payable",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 68,
    "moduleName": "DA Calculation",
    "testScenario": "Company Boarding + Lodging",
    "testCaseDescription": "Company provides both boarding and lodging",
    "expectedResult": "Only 25% of flat DA rate payable",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 69,
    "moduleName": "DA Calculation",
    "testScenario": "Stay >20 Days Same Station",
    "testCaseDescription": "25-day stay at same station",
    "expectedResult": "Days 1-20: 100% DA and Days 21-25: 75% DA",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 70,
    "moduleName": "DA Calculation",
    "testScenario": "Guest House Stay",
    "testCaseDescription": "Employee stays in company guest house",
    "expectedResult": "Misc allowance (Rs.100-Rs.200/day by band) plus full DA for food",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 71,
    "moduleName": "DA Calculation",
    "testScenario": "NMS Flat Rate DA",
    "testCaseDescription": "NMS employee on tour",
    "expectedResult": "Flat per-day DA rate applied per cadre x city tier",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 72,
    "moduleName": "DA Calculation",
    "testScenario": "NMS - Company Lodging Provided",
    "testCaseDescription": "NMS employee and company provides boarding/lodging",
    "expectedResult": "Only 25% of flat rate payable",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 73,
    "moduleName": "DA Calculation",
    "testScenario": "Personal Extension Days Excluded",
    "testCaseDescription": "Employee marks 3 days as personal extension",
    "expectedResult": "No DA for those 3 days and excluded from DA count",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 74,
    "moduleName": "DA Calculation",
    "testScenario": "DA Config Missing",
    "testCaseDescription": "Employee grade/location has no DA rules configured",
    "expectedResult": "Settlement form disabled - Daily Allowance rules are not configured for your grade/location",
    "priority": "P0 Critical",
    "testType": "Negative"
  },
  {
    "id": 75,
    "moduleName": "DA Calculation",
    "testScenario": "DA Recalculation Speed",
    "testCaseDescription": "Change input affecting DA calculation",
    "expectedResult": "Recalculation completes within 500 ms",
    "priority": "P1 High",
    "testType": "Performance"
  },
  {
    "id": 76,
    "moduleName": "DA Calculation",
    "testScenario": "Train Journey >12 Hours",
    "testCaseDescription": "Overnight long-distance train journey",
    "expectedResult": "Rs.150 misc for train meals plus normal DA calculation",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 77,
    "moduleName": "Settlement Form",
    "testScenario": "Tour Plan Details Loaded",
    "testCaseDescription": "Open settlement form for an approved TP",
    "expectedResult": "TP dates purpose origin destination and trip outcome field displayed",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 78,
    "moduleName": "Settlement Form",
    "testScenario": "Company Booking Grid Displayed",
    "testCaseDescription": "TP has company-booked tickets/hotels",
    "expectedResult": "Pre-booked items shown with approved amounts and amount field editable",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 79,
    "moduleName": "Settlement Form",
    "testScenario": "Company Booking Amount Edit",
    "testCaseDescription": "Edit approved amount on a company booking line",
    "expectedResult": "Changed amount flows into balance calculation",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 80,
    "moduleName": "Settlement Form",
    "testScenario": "Self Expense Totals Displayed",
    "testCaseDescription": "Multiple self expenses entered across categories",
    "expectedResult": "Aggregated totals by TKT STY CAB MSC displayed",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 81,
    "moduleName": "Settlement Form",
    "testScenario": "Balance - Positive (Payable)",
    "testCaseDescription": "Self expenses plus DA exceed travel advance",
    "expectedResult": "Positive balance shown as payable to employee",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 82,
    "moduleName": "Settlement Form",
    "testScenario": "Balance - Negative (Recoverable)",
    "testCaseDescription": "Travel advance exceeds self expenses plus DA",
    "expectedResult": "Negative balance shown as recoverable from employee",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 83,
    "moduleName": "Settlement Form",
    "testScenario": "Balance - Multiple Advances",
    "testCaseDescription": "Two advances drawn against one TP",
    "expectedResult": "Both advances summed and deducted in balance",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 84,
    "moduleName": "Settlement Form",
    "testScenario": "Zero Self Expenses",
    "testCaseDescription": "Submit with no self expenses and only advance taken",
    "expectedResult": "Balance = 0 minus Advance = negative and warning displayed and submission succeeds",
    "priority": "P1 High",
    "testType": "Edge Case"
  },
  {
    "id": 85,
    "moduleName": "Settlement Form",
    "testScenario": "On-Duty Auto-Population",
    "testCaseDescription": "Open settlement form",
    "expectedResult": "On-duty date range auto-populated from TP travel dates",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 86,
    "moduleName": "Settlement Form",
    "testScenario": "On-Duty Dates Editable",
    "testCaseDescription": "Modify auto-populated on-duty dates",
    "expectedResult": "Dates are editable within TP range",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 87,
    "moduleName": "Settlement Form",
    "testScenario": "On-Duty Dates Outside TP",
    "testCaseDescription": "Enter on-duty dates outside Tour Plan range",
    "expectedResult": "Hard block - On-duty dates must be within your tour period",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 88,
    "moduleName": "Settlement Form",
    "testScenario": "Tour End Date Missing",
    "testCaseDescription": "TP has no end date set",
    "expectedResult": "End date field shown and required before save/submit",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 89,
    "moduleName": "Settlement Form",
    "testScenario": "Cost Centre Default",
    "testCaseDescription": "Open settlement form",
    "expectedResult": "Cost centre fields defaulted from employee profile",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 90,
    "moduleName": "Settlement Form",
    "testScenario": "Cost Centre Multi-Split - Valid",
    "testCaseDescription": "Split across 2 cost centres totalling 100%",
    "expectedResult": "Saved successfully",
    "priority": "P2",
    "testType": "Functional"
  },
  {
    "id": 91,
    "moduleName": "Settlement Form",
    "testScenario": "Cost Centre Multi-Split - Invalid",
    "testCaseDescription": "Split across 2 cost centres totalling 80%",
    "expectedResult": "Hard block - Cost centre allocations must total 100%",
    "priority": "P2",
    "testType": "Validation"
  },
  {
    "id": 92,
    "moduleName": "Settlement Form",
    "testScenario": "Save as Draft",
    "testCaseDescription": "Fill partial data and click Save Draft",
    "expectedResult": "Settlement saved with Draft status and data persists on return",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 93,
    "moduleName": "Settlement Form",
    "testScenario": "Reporting Manager Displayed",
    "testCaseDescription": "Open settlement form",
    "expectedResult": "Name and designation of Reporting Manager shown",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 94,
    "moduleName": "Settlement Form",
    "testScenario": "Duplicate Expense Warning",
    "testCaseDescription": "Enter expense with same category date and amount as existing",
    "expectedResult": "Soft warning - A similar expense entry already exists. Do you want to continue?",
    "priority": "P1 High",
    "testType": "Validation"
  },
  {
    "id": 95,
    "moduleName": "Settlement Form",
    "testScenario": "Settlement End Date Before Start",
    "testCaseDescription": "Enter settlement end date before start date",
    "expectedResult": "Hard block - Settlement end date cannot be before start date",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 96,
    "moduleName": "Submission & Approval",
    "testScenario": "Successful Submit",
    "testCaseDescription": "Fill all required fields pass all validations and submit",
    "expectedResult": "Status changes to Pending Approval and email sent to manager and form becomes read-only",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 97,
    "moduleName": "Submission & Approval",
    "testScenario": "Pending Leave Blocks Submit",
    "testCaseDescription": "Attempt submit with pending leave records during tour",
    "expectedResult": "Hard block - Resolve pending leave records before submitting",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 98,
    "moduleName": "Submission & Approval",
    "testScenario": "DA Days Negative",
    "testCaseDescription": "Scenario causing negative DA days",
    "expectedResult": "Hard block - DA days cannot be negative",
    "priority": "P0 Critical",
    "testType": "Validation"
  },
  {
    "id": 99,
    "moduleName": "Submission & Approval",
    "testScenario": "Email Content Verification",
    "testCaseDescription": "Submit settlement and verify email sent to manager",
    "expectedResult": "Email includes Employee Name ID TP Number Tour Dates Total Claimed Amount and Balance",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 100,
    "moduleName": "Submission & Approval",
    "testScenario": "Email Failure Handling",
    "testCaseDescription": "Submit when email service is down",
    "expectedResult": "Settlement saved as Pending Approval and email failure logged and retry attempted and employee sees success",
    "priority": "P1 High",
    "testType": "Edge Case"
  },
  {
    "id": 101,
    "moduleName": "Submission & Approval",
    "testScenario": "Mode Deviation Flag in Email",
    "testCaseDescription": "Submit with a ticket exceeding entitled class",
    "expectedResult": "Approval notification to manager flags mode deviation",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 102,
    "moduleName": "Submission & Approval",
    "testScenario": "Edit After Submit Blocked",
    "testCaseDescription": "After settlement submitted attempt to edit/delete expense",
    "expectedResult": "Edit/Delete buttons disabled and read-only view shown",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 103,
    "moduleName": "Submission & Approval",
    "testScenario": "Rejection - Returns to Draft",
    "testCaseDescription": "Manager rejects settlement",
    "expectedResult": "Status returns to Draft and form becomes editable again",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 104,
    "moduleName": "Submission & Approval",
    "testScenario": "Approved - Read Only",
    "testCaseDescription": "Manager approves settlement",
    "expectedResult": "Status changes to Approved and form is permanently read-only",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 105,
    "moduleName": "Submission & Approval",
    "testScenario": "Document Merge on Submit",
    "testCaseDescription": "Submit settlement with multiple self-expense documents",
    "expectedResult": "All documents merged and uploaded to Azure Blob Storage",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 106,
    "moduleName": "Submission & Approval",
    "testScenario": "Company Booking Deemed Approved",
    "testCaseDescription": "Settlement has company-booked line items",
    "expectedResult": "Company bookings do not trigger separate approval step",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 107,
    "moduleName": "Security",
    "testScenario": "Unauthenticated API Call",
    "testCaseDescription": "Call API endpoint without JWT token",
    "expectedResult": "HTTP 401 returned",
    "priority": "P0 Critical",
    "testType": "Security"
  },
  {
    "id": 108,
    "moduleName": "Security",
    "testScenario": "Expired JWT Token",
    "testCaseDescription": "Call API with expired Azure AD JWT",
    "expectedResult": "HTTP 401 returned",
    "priority": "P0 Critical",
    "testType": "Security"
  },
  {
    "id": 109,
    "moduleName": "Security",
    "testScenario": "IDOR - Tour Plan Access",
    "testCaseDescription": "Access another employee's TP via direct API call with different TP ID",
    "expectedResult": "HTTP 403 returned and no data exposed",
    "priority": "P0 Critical",
    "testType": "Security"
  },
  {
    "id": 110,
    "moduleName": "Security",
    "testScenario": "IDOR - Expense Entry Access",
    "testCaseDescription": "Access another employee's expense entry via direct API",
    "expectedResult": "HTTP 403 returned",
    "priority": "P0 Critical",
    "testType": "Security"
  },
  {
    "id": 111,
    "moduleName": "Security",
    "testScenario": "SQL Injection Prevention",
    "testCaseDescription": "Enter SQL injection payload in amount/text fields",
    "expectedResult": "Parameterised stored procedures prevent injection and no data leak",
    "priority": "P0 Critical",
    "testType": "Security"
  },
  {
    "id": 112,
    "moduleName": "Security",
    "testScenario": "Response Headers Check",
    "testCaseDescription": "Inspect API response headers",
    "expectedResult": "X-Content-Type-Options: nosniff and X-Frame-Options: DENY present",
    "priority": "P1 High",
    "testType": "Security"
  },
  {
    "id": 113,
    "moduleName": "Security",
    "testScenario": "Sensitive Data Not Logged",
    "testCaseDescription": "Check application logs after settlement submission",
    "expectedResult": "Expense amounts and financial data not in cleartext logs",
    "priority": "P1 High",
    "testType": "Security"
  },
  {
    "id": 114,
    "moduleName": "Performance",
    "testScenario": "Form Load Time",
    "testCaseDescription": "Load settlement form with all data on 4G network",
    "expectedResult": "Completes in less than 3 seconds",
    "priority": "P1 High",
    "testType": "Performance"
  },
  {
    "id": 115,
    "moduleName": "Performance",
    "testScenario": "Save with Upload",
    "testCaseDescription": "Save expense entry with 1 MB document",
    "expectedResult": "Completes in less than 5 seconds",
    "priority": "P1 High",
    "testType": "Performance"
  },
  {
    "id": 116,
    "moduleName": "Performance",
    "testScenario": "Submit with Blob Upload",
    "testCaseDescription": "Submit full settlement with all documents",
    "expectedResult": "Completes in less than 8 seconds",
    "priority": "P1 High",
    "testType": "Performance"
  },
  {
    "id": 117,
    "moduleName": "Performance",
    "testScenario": "Balance Recomputation",
    "testCaseDescription": "Change an amount field and observe balance update",
    "expectedResult": "Instant update (client-side real-time)",
    "priority": "P1 High",
    "testType": "Performance"
  },
  {
    "id": 118,
    "moduleName": "Accessibility",
    "testScenario": "Screen Reader Labels",
    "testCaseDescription": "Navigate form with screen reader",
    "expectedResult": "All fields have visible labels and ARIA attributes",
    "priority": "P1 High",
    "testType": "Accessibility"
  },
  {
    "id": 119,
    "moduleName": "Accessibility",
    "testScenario": "Error Focus Management",
    "testCaseDescription": "Submit form with validation errors",
    "expectedResult": "Focus moves to first error field and error announced via aria-live",
    "priority": "P1 High",
    "testType": "Accessibility"
  },
  {
    "id": 120,
    "moduleName": "Accessibility",
    "testScenario": "Keyboard Navigation",
    "testCaseDescription": "Tab through all interactive elements",
    "expectedResult": "All buttons links inputs reachable via keyboard",
    "priority": "P1 High",
    "testType": "Accessibility"
  },
  {
    "id": 121,
    "moduleName": "Accessibility",
    "testScenario": "Touch Target Size",
    "testCaseDescription": "Inspect interactive elements on mobile",
    "expectedResult": "Minimum touch target size 44x44 px",
    "priority": "P1 High",
    "testType": "Accessibility"
  },
  {
    "id": 122,
    "moduleName": "Responsiveness",
    "testScenario": "Mobile 360px Width",
    "testCaseDescription": "View all screens at 360px viewport width",
    "expectedResult": "Layout usable and tables scrollable and touch targets adequate",
    "priority": "P1 High",
    "testType": "UI"
  },
  {
    "id": 123,
    "moduleName": "Responsiveness",
    "testScenario": "Mobile 390px Width (iPhone 14)",
    "testCaseDescription": "View all screens at 390px viewport width",
    "expectedResult": "Layout usable and functional",
    "priority": "P1 High",
    "testType": "UI"
  },
  {
    "id": 124,
    "moduleName": "Responsiveness",
    "testScenario": "Dark Mode - All Screens",
    "testCaseDescription": "Switch to dark theme and verify all primary screens",
    "expectedResult": "All screens chips tables form fields correctly coloured and readable",
    "priority": "P1 High",
    "testType": "UI"
  },
  {
    "id": 125,
    "moduleName": "Responsiveness",
    "testScenario": "Offline Read Mode",
    "testCaseDescription": "Disconnect network and view cached Tour Plans",
    "expectedResult": "Cached TPs visible in read-only mode",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 126,
    "moduleName": "Responsiveness",
    "testScenario": "Submit Requires Connectivity",
    "testCaseDescription": "Attempt to submit settlement while offline",
    "expectedResult": "Submit fails gracefully with connectivity error message",
    "priority": "P1 High",
    "testType": "Functional"
  },
  {
    "id": 127,
    "moduleName": "Edit/Delete Entry",
    "testScenario": "Edit Pre-Submitted Entry",
    "testCaseDescription": "Edit a previously saved expense entry before submission",
    "expectedResult": "Entry updated successfully",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 128,
    "moduleName": "Edit/Delete Entry",
    "testScenario": "Delete Entry with Confirmation",
    "testCaseDescription": "Delete a saved expense entry",
    "expectedResult": "Confirmation dialog shown and entry deleted on confirm",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 129,
    "moduleName": "Edit/Delete Entry",
    "testScenario": "No Edit After Submit",
    "testCaseDescription": "Attempt to edit expense after settlement is in Pending Approval",
    "expectedResult": "Edit button disabled and read-only view",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 130,
    "moduleName": "Edit/Delete Entry",
    "testScenario": "No Delete After Submit",
    "testCaseDescription": "Attempt to delete expense after settlement is in Pending Approval",
    "expectedResult": "Delete button disabled",
    "priority": "P0 Critical",
    "testType": "Functional"
  },
  {
    "id": 131,
    "moduleName": "Business Rules",
    "testScenario": "2 Pending Settlements Block New TP",
    "testCaseDescription": "Employee has 2 TPs in Pending Settlement status and tries to create new TP",
    "expectedResult": "New TP creation blocked",
    "priority": "P1 High",
    "testType": "Business Rule"
  },
  {
    "id": 132,
    "moduleName": "Business Rules",
    "testScenario": "Personal Extension - Family Expense Not Submitted",
    "testCaseDescription": "Mark days as personal extension and attempt to claim family expenses",
    "expectedResult": "Family expenses not reimbursable and blocked or excluded",
    "priority": "P2",
    "testType": "Business Rule"
  },
  {
    "id": 133,
    "moduleName": "Business Rules",
    "testScenario": "Exceeds Entitlement - Flagged Not Blocked",
    "testCaseDescription": "Self-expense claim exceeds entitlement limit (non-accommodation)",
    "expectedResult": "Flagged for elevated scrutiny but submission not blocked",
    "priority": "P1 High",
    "testType": "Business Rule"
  }
] as ExpenseSettlementTestCase[];
