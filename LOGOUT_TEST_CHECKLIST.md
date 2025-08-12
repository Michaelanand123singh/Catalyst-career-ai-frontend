# 🔐 Logout System Test Checklist

## ✅ **Pre-Test Setup**
- [ ] Frontend application is running on `http://localhost:3000`
- [ ] Backend API is running and accessible
- [ ] Browser developer tools are open (F12)
- [ ] React DevTools extension is installed (optional but recommended)

## 🧪 **Test 1: User Authentication Flow**
- [ ] Navigate to `http://localhost:3000`
- [ ] Click on "Career AI" button in the navbar
- [ ] Sign in with valid credentials (e.g., test@example.com / password123)
- [ ] Verify successful login (user should be redirected or see user dropdown)

## 🧪 **Test 2: User Dropdown Appearance**
- [ ] After successful login, verify the navbar shows:
  - [ ] User avatar/initials (circular badge with first letter)
  - [ ] User name or email (truncated if needed)
  - [ ] Dropdown arrow (chevron down icon)
- [ ] Button should have proper styling (amber background, white text)

## 🧪 **Test 3: User Dropdown Functionality**
- [ ] Click on the user dropdown button
- [ ] Verify dropdown menu opens with:
  - [ ] User information section (name and email)
  - [ ] "Career AI Chat" menu item
  - [ ] "Profile Settings" menu item
  - [ ] Divider line
  - [ ] "Sign Out" button (red text)
- [ ] Verify dropdown has proper styling and positioning

## 🧪 **Test 4: Dropdown Accessibility**
- [ ] **Keyboard Navigation:**
  - [ ] Press Tab to focus on user dropdown button
  - [ ] Press Enter to open dropdown
  - [ ] Use Arrow keys to navigate menu items
  - [ ] Press Escape to close dropdown
  - [ ] Press Tab to move between menu items
- [ ] **Screen Reader Support:**
  - [ ] Verify proper ARIA labels are present
  - [ ] Check that menu items have `role="menuitem"`
  - [ ] Verify `aria-expanded` attribute changes correctly

## 🧪 **Test 5: Logout Confirmation**
- [ ] Click on "Sign Out" button in the dropdown
- [ ] Verify confirmation dialog appears with message: "Are you sure you want to sign out?"
- [ ] Test both confirmation options:
  - [ ] Click "Cancel" - dropdown should close, user should remain logged in
  - [ ] Click "OK" - logout process should begin

## 🧪 **Test 6: Logout Process**
- [ ] Confirm logout in the dialog
- [ ] Verify loading state:
  - [ ] "Sign Out" button shows "Signing out..." text
  - [ ] Button is disabled during logout
  - [ ] Loading state appears on both desktop and mobile
- [ ] Verify logout completion:
  - [ ] Success message appears: "Successfully signed out!"
  - [ ] Message disappears after 3 seconds
  - [ ] User is redirected to home page (if on protected route)

## 🧪 **Test 7: Post-Logout State**
- [ ] Verify navbar changes:
  - [ ] User dropdown is replaced with "Career AI" login button
  - [ ] No user information is visible
  - [ ] Button styling matches original login button
- [ ] Verify authentication state:
  - [ ] Check browser console: `localStorage.getItem("auth_token")` should return `null`
  - [ ] React DevTools should show `user: null` in AuthContext
  - [ ] No authentication headers in network requests

## 🧪 **Test 8: Protected Route Handling**
- [ ] Navigate to `/chat` (protected route)
- [ ] Sign in again
- [ ] While on `/chat`, click logout
- [ ] Verify user is redirected to home page (`/`)
- [ ] Verify user cannot access `/chat` without logging in again

## 🧪 **Test 9: Mobile Responsiveness**
- [ ] Test on mobile viewport or device
- [ ] Verify mobile menu shows user section:
  - [ ] User avatar/initials
  - [ ] User name and email
  - [ ] "Career AI Chat" button
  - [ ] "Sign Out" button
- [ ] Test logout functionality on mobile
- [ ] Verify responsive design and touch interactions

## 🧪 **Test 10: Error Handling**
- [ ] **Network Error Simulation:**
  - [ ] Disconnect internet temporarily
  - [ ] Try to logout
  - [ ] Verify error message appears: "Error signing out. Please try again."
  - [ ] Verify user remains logged in on error
- [ ] **Multiple Logout Attempts:**
  - [ ] Try clicking logout multiple times quickly
  - [ ] Verify only one logout process runs
  - [ ] Verify button remains disabled during process

## 🧪 **Test 11: Browser Console Verification**
Run these commands in browser console:

```javascript
// Check authentication token
console.log('Auth Token:', localStorage.getItem('auth_token'));

// Check if user is logged in
console.log('User Logged In:', !!localStorage.getItem('auth_token'));

// Clear token manually (for testing)
localStorage.removeItem('auth_token');

// Reload page to see changes
location.reload();
```

## 🧪 **Test 12: Edge Cases**
- [ ] **Browser Refresh:**
  - [ ] Login, then refresh page
  - [ ] Verify user remains logged in
  - [ ] Try logout after refresh
- [ ] **Multiple Tabs:**
  - [ ] Login in one tab
  - [ ] Open another tab to same site
  - [ ] Verify user is logged in in second tab
  - [ ] Logout in first tab
  - [ ] Refresh second tab - should show logged out state
- [ ] **Session Expiry:**
  - [ ] Wait for token to expire (if applicable)
  - [ ] Try to access protected routes
  - [ ] Verify proper redirect to login

## ✅ **Expected Results Summary**
After successful logout:
- ✅ User dropdown disappears
- ✅ "Career AI" login button appears
- ✅ Authentication token is cleared
- ✅ User state is reset to null
- ✅ Success message is shown
- ✅ User is redirected if on protected route
- ✅ No authentication errors in console
- ✅ Network requests no longer include auth headers

## 🐛 **Common Issues to Check**
- [ ] Token not being cleared from localStorage
- [ ] User state not being reset in React
- [ ] Dropdown not closing after logout
- [ ] Redirect not working properly
- [ ] Success message not appearing
- [ ] Loading state not working
- [ ] Accessibility issues with keyboard navigation
- [ ] Mobile responsiveness problems

## 📝 **Test Results**
- **Date:** _______________
- **Tester:** _______________
- **Browser:** _______________
- **Device:** _______________
- **All Tests Passed:** ✅ / ❌
- **Issues Found:** _______________
- **Notes:** _______________
