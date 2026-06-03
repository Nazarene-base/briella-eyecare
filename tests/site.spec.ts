import { test, expect } from '@playwright/test';

test.describe('Briella Eyecare Site Verification', () => {
    test('Homepage loads correctly', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Briella Eyecare/);
        await expect(page.locator('text=See the World Clearly')).toBeVisible();
        await expect(page.locator('text=Book Appointment')).toBeVisible();
        await expect(page.locator('text=Our Services')).toBeVisible();
        await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });
    });

    test('Services page shows all 7 services', async ({ page }) => {
        await page.goto('/services');
        await expect(page.locator('h1:has-text("Our Services")')).toBeVisible();
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
        await page.goto('/about');
        await expect(page.locator('h1:has-text("About Briella Eyecare")')).toBeVisible();
        await expect(page.locator('text=Our Story')).toBeVisible();
        await expect(page.locator('text=Our Mission')).toBeVisible();
        await expect(page.locator('text=Meet Our Team')).toBeVisible();
        await expect(page.locator('text=Why Choose Briella Eyecare?')).toBeVisible();
        await expect(page.locator('.bg-yellow-50')).toHaveCount(0);
        await page.screenshot({ path: 'test-results/about.png', fullPage: true });
    });

    test('Contact page has WhatsApp CTA, phone, email, and map', async ({ page }) => {
        await page.goto('/contact');
        await expect(page.locator('h1:has-text("Contact Us")')).toBeVisible();
        // WhatsApp booking button
        await expect(page.locator('text=Book Appointment via WhatsApp')).toBeVisible();
        // Contact info
        await expect(page.locator('text=0909 036 8786')).toBeVisible();
        await expect(page.locator('text=Briella-eyecare@gmail.com')).toBeVisible();
        // Map iframe
        await expect(page.locator('iframe[src*="google.com/maps"]')).toBeVisible();
        await page.screenshot({ path: 'test-results/contact.png', fullPage: true });
    });

    test('Contact page phone number is click-to-call', async ({ page }) => {
        await page.goto('/contact');
        const telLink = page.locator('a[href^="tel:"]');
        await expect(telLink.first()).toBeVisible();
    });

    test('WhatsApp links point to correct number', async ({ page }) => {
        await page.goto('/');
        const whatsappLinks = page.locator('a[href*="wa.me/2349090368786"]');
        await expect(whatsappLinks.first()).toBeVisible();
    });

    test('Blog page shows Coming Soon', async ({ page }) => {
        await page.goto('/blog');
        await expect(page.locator('h1:has-text("Blog & Resources")')).toBeVisible();
        await expect(page.locator('text=Coming Soon')).toBeVisible();
        await expect(page.locator('text=Back to Home')).toBeVisible();
        await page.screenshot({ path: 'test-results/blog.png', fullPage: true });
    });

    test('Mobile menu toggle works', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto('/');
        const menuButton = page.locator('button[aria-label="Toggle menu"]');
        await expect(menuButton).toBeVisible();
        await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
        await menuButton.click();
        await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
        await expect(page.locator('text=Services')).toBeVisible();
    });

    test('Skip to content link exists', async ({ page }) => {
        await page.goto('/');
        const skipLink = page.locator('a[href="#main-content"]');
        await expect(skipLink).toBeAttached();
    });
});
