from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Take screenshot of Hero Mockup (Case 03 approx)
    # Scroll a bit down
    page.evaluate("window.scrollTo(0, 1000)")
    page.wait_for_timeout(1000)

    page.evaluate("window.scrollTo(0, 3000)")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/verification_01.png")

    page.evaluate("window.scrollTo(0, 5000)")
    page.wait_for_timeout(1000)

    # Ensure poster parallax and glass cards are rendered
    page.evaluate("window.scrollTo(0, document.body.scrollHeight - 1000)")
    page.wait_for_timeout(2000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
