## Describe your changes

## Issue ticket number and link

## Checklist before requesting a review (skip if just adding/editing APIs & templates)

-   [ ] I added tests, otherwise the reason is:
-   [ ] External API requests have `retries`
-   [ ] Pagination is used where appropriate
-   [ ] The built in `nango.paginate` call is used instead of a `while (true)` loop
-   [ ] Third party requests are NOT parallelized (this can cause issues with rate limits)
-   [ ] If a sync requires metadata the `nango.yaml` has `auto_start: false`
-   [ ] If the sync is a `full` sync then `track_deletes: true` is set
-   [ ] I followed the best practices and guidelines from the [Writing Integration Scripts](/NangoHQ/integration-templates/blob/main/guides/WRITING_SCRIPTS.md) doc
