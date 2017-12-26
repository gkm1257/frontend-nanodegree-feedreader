/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(() => {

    describe('RSS Feeds', () => {

        /* Check allFeeds variable has been defined and that
         * it is not empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Ensure every feed in allFeeds has a URL and that
         * it is not empty.
         */
        it('have a URL in each feed', () => {
            for (let feed of allFeeds) {
              expect(feed.url).toBeDefined();
              expect(feed.url).not.toBe("");
            }
        });

        /* Ensure every feed in allFeeds has a name and that
         * it is not empty.
         */
        it('have a name in each feed', () => {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");
            }
        });
    });


    describe('The menu', () => {

        /* Ensure the menu element is hidden by default */
        it('is hidden by default', () => {
            expect($('body')).toHaveClass('menu-hidden');
        });

        /* Ensure the menu element changes visibility when clicked
         * the menu icon
         */
        it('changes visibility when clicked the menu icon', () => {
           $('.menu-icon-link').click();
           expect($('body')).not.toHaveClass('menu-hidden');

           $('.menu-icon-link').click();
           expect($('body').hasClass('menu-hidden')).toBe(true);
       });
    });
    

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
});
