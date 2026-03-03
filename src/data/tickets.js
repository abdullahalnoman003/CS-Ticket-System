const tickets = [
  {
    id: 1,
    title: "Login page not loading",
    description:
      "The login page fails to load on mobile devices when using Safari browser. Users are unable to access their accounts.",
    customer: "Alice Johnson",
    priority: "High",
    status: "open",
    createdAt: "2026-02-10",
  },
  {
    id: 2,
    title: "Payment gateway timeout",
    description:
      "Checkout process times out after entering card details. The transaction never completes and users are charged but orders are not placed.",
    customer: "Bob Martinez",
    priority: "High",
    status: "open",
    createdAt: "2026-02-11",
  },
  {
    id: 3,
    title: "Profile picture not uploading",
    description:
      "Users report that uploading a new profile picture results in a blank avatar after saving. The issue appears on all browsers.",
    customer: "Carol White",
    priority: "Medium",
    status: "open",
    createdAt: "2026-02-12",
  },
  {
    id: 4,
    title: "Email notifications delayed",
    description:
      "Order confirmation and shipping notification emails are being delayed by 4-6 hours instead of being sent immediately.",
    customer: "David Lee",
    priority: "Medium",
    status: "open",
    createdAt: "2026-02-13",
  },
  {
    id: 5,
    title: "Dark mode not persisting",
    description:
      "After setting dark mode preferences, the theme resets to light mode every time the user logs back in.",
    customer: "Emma Davis",
    priority: "Low",
    status: "open",
    createdAt: "2026-02-14",
  },
  {
    id: 6,
    title: "Search results inaccurate",
    description:
      "The product search feature returns irrelevant results. Searching for specific product names shows completely unrelated items.",
    customer: "Frank Wilson",
    priority: "Medium",
    status: "open",
    createdAt: "2026-02-15",
  },
  {
    id: 7,
    title: "Cart items disappearing",
    description:
      "Shopping cart clears itself when the browser tab is refreshed. Customers lose their entire cart and have to re-add all items.",
    customer: "Grace Taylor",
    priority: "High",
    status: "open",
    createdAt: "2026-02-16",
  },
  {
    id: 8,
    title: "Invoice download failing",
    description:
      "Clicking the 'Download Invoice' button does nothing on some orders. Users cannot obtain their purchase receipts.",
    customer: "Henry Brown",
    priority: "Low",
    status: "open",
    createdAt: "2026-02-17",
  },
  {
    id: 9,
    title: "Two-factor auth not sending OTP",
    description:
      "Users with 2FA enabled are not receiving the OTP SMS. This is blocking them from completing the login process entirely.",
    customer: "Isla Anderson",
    priority: "High",
    status: "open",
    createdAt: "2026-02-18",
  },
  {
    id: 10,
    title: "Dashboard stats incorrect",
    description:
      "The analytics dashboard is showing yesterday's data instead of real-time figures. Revenue and order counts are not updating.",
    customer: "James Thomas",
    priority: "Medium",
    status: "open",
    createdAt: "2026-02-19",
  },
  {
    id: 11,
    title: "Password reset link expired",
    description:
      "Password reset links expire within seconds of being sent, making it impossible for users to reset their passwords.",
    customer: "Karen Jackson",
    priority: "High",
    status: "open",
    createdAt: "2026-02-20",
  },
  {
    id: 12,
    title: "Mobile app crashing on startup",
    description:
      "The Android application crashes immediately after the splash screen on devices running Android 13 or higher.",
    customer: "Liam Harris",
    priority: "High",
    status: "open",
    createdAt: "2026-02-21",
  },
  {
    id: 13,
    title: "Filter options not working",
    description:
      "Category and price range filters on the product listing page do not apply. The page reloads but shows all products regardless.",
    customer: "Mia Clark",
    priority: "Medium",
    status: "open",
    createdAt: "2026-02-22",
  },
];

export default tickets;
