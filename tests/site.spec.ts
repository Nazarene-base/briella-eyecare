import { test, expect } from '@playwright/test';

test.describe('Briella Eyecare Site Verification', () => {
    test('Homepage loads correctly', async ({ page }) => {
        await page.goto('http://localhost:3000');
        await expect(page).toHaveTitle(/Briella Eyecare/);
        await expect(page.locator('text=See the World Clearly')).toBeVisible();
        await expect(page.locator('text=Book Appointment')).toBeVisible();
        await expect(page.locator('text=Our Services')).toBeVisible();
        await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });
    });

    test('Services page shows all 7 services', async ({ page }) => {
        await page.goto('http://localhost:3000/services');
        await expect(page.locator('h1:has-text("Our Services")')).toBeVisible();
        // Check for all 7 service titles
        await expect(page.locator('text=Comprehensive Eye Examinations')).toBeVisible();
        await expect(page.locator('text=Refraction')).toBeVisible();
        await expect(page.locator('text=Prescription Services')).toBeVisible();
        await expect(page.locator('text=Sales of Eyeglasses and Contact Lenses')).toBeVisible();
        await expect(page.locator('text=Disease Diagnosis & Management')).toBeVisible();
        await expect(page.locator('text=Pediatric Optometry')).toBeVisible();
        await expect(page.locator('text=Vision Therapy')).toBeVisible();
        await page.screenshot({ path: 'test-results/services.png', fullPage: true });
    });

    test('About page has refined layout', async ({ page }) => {
        await page.goto('http://localhost:3000/about');
        await expect(page.locator('h1:has-text("About Briella Eyecare")')).toBeVisible();
        await expect(page.locator('text=Our Story')).toBeVisible();
        await expect(page.locator('text=Our Mission')).toBeVisible();
        await expect(page.locator('text=Meet Our Team')).toBeVisible();
        await expect(page.locator('text=Why Choose Briella Eyecare?')).toBeVisible();
        // Ensure no yellow placeholder boxes
        await expect(page.locator('.bg-yellow-50')).toHaveCount(0);
        await page.screenshot({ path: 'test-results/about.png', fullPage: true });
    });

    test('Contact page has form and map', async ({ page }) => {
        await page.goto('http://localhost:3000/contact');
        await expect(page.locator('h1:has-text("Contact Us")')).toBeVisible();
        // Form fields
        await expect(page.locator('label:has-text("Full Name")')).toBeVisible();
        await expect(page.locator('label:has-text("Email Address")')).toBeVisible();
        await expect(page.locator('label:has-text("Phone Number")')).toBeVisible();
        await expect(page.locator('label:has-text("Message")')).toBeVisible();
        await expect(page.locator('button:has-text("Send Message")')).toBeVisible();
        // Contact info
        await expect(page.locator('text=0803 218 4887')).toBeVisible();
        await expect(page.locator('text=uwamarinlinda@gmail.com')).toBeVisible();
        // Map iframe
        await expect(page.locator('iframe[src*="google.com/maps"]')).toBeVisible();
        await page.screenshot({ path: 'test-results/contact.png', fullPage: true });
    });

    test('Blog page shows Coming Soon', async ({ page }) => {
        await page.goto('http://localhost:3000/blog');
        await expect(page.locator('h1:has-text("Blog & Resources")')).toBeVisible();
        await expect(page.locator('text=Coming Soon')).toBeVisible();
        await expect(page.locator('text=Back to Home')).toBeVisible();
        await page.screenshot({ path: 'test-results/blog.png', fullPage: true });
    });
});
