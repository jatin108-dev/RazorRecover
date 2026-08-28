export const activities = [
  {
    title: "Payment recovered successfully",
    detail: "₹2,499 from Rahul Sharma",
    time: "2 min ago",
    type: "success",
  },
  {
    title: "Recovery initiated",
    detail: "Payment link sent to Aman Gupta",
    time: "5 min ago",
    type: "info",
  },
  {
    title: "High risk payment detected",
    detail: "₹4,999 from Priya Singh",
    time: "8 min ago",
    type: "danger",
  },
  {
    title: "Reminder sent",
    detail: "Follow-up sent to Neha Verma",
    time: "12 min ago",
    type: "warning",
  },
];

export const recoveryOpportunities = [
  {
    name: "Rahul Sharma",
    amount: "₹2,499",
    reason: "UPI Timeout",
    score: "82%",
  },
  {
    name: "Priya Singh",
    amount: "₹4,999",
    reason: "Bank Error",
    score: "76%",
  },
  {
    name: "Aman Gupta",
    amount: "₹899",
    reason: "Card Declined",
    score: "68%",
  },
];

export const stats = [
  {
    title: "Total Revenue",
    value: "₹8,45,230",
    change: "+18.6%",
    type: "positive",
  },
  {
    title: "Revenue At Risk",
    value: "₹2,12,450",
    change: "23 payments",
    type: "danger",
  },
  {
    title: "Recovered Revenue",
    value: "₹74,350",
    change: "+32.4%",
    type: "positive",
  },
  {
    title: "Recovery Rate",
    value: "35.06%",
    change: "+8.7%",
    type: "positive",
  },
];


export const payments = [
  {
    id: "pay_RR001",
    customer: "Rahul Sharma",
    email: "rahul@example.com",
    amount: "₹2,499",
    method: "UPI",
    status: "Failed",
    reason: "UPI Timeout",
    recoveryScore: 82,
    date: "28 Aug 2026, 10:42 AM",
  },
  {
    id: "pay_RR002",
    customer: "Priya Singh",
    email: "priya@example.com",
    amount: "₹4,999",
    method: "Card",
    status: "Failed",
    reason: "Bank Declined",
    recoveryScore: 76,
    date: "28 Aug 2026, 10:31 AM",
  },
  {
    id: "pay_RR003",
    customer: "Aman Gupta",
    email: "aman@example.com",
    amount: "₹899",
    method: "Card",
    status: "Failed",
    reason: "Card Declined",
    recoveryScore: 68,
    date: "28 Aug 2026, 10:18 AM",
  },
  {
    id: "pay_RR004",
    customer: "Neha Verma",
    email: "neha@example.com",
    amount: "₹1,299",
    method: "UPI",
    status: "Success",
    reason: "—",
    recoveryScore: null,
    date: "28 Aug 2026, 09:56 AM",
  },
  {
    id: "pay_RR005",
    customer: "Arjun Mehta",
    email: "arjun@example.com",
    amount: "₹3,499",
    method: "Net Banking",
    status: "At Risk",
    reason: "Payment Abandoned",
    recoveryScore: 91,
    date: "28 Aug 2026, 09:42 AM",
  },
  {
    id: "pay_RR006",
    customer: "Simran Kaur",
    email: "simran@example.com",
    amount: "₹1,899",
    method: "UPI",
    status: "Failed",
    reason: "Network Error",
    recoveryScore: 74,
    date: "28 Aug 2026, 09:30 AM",
  },
];