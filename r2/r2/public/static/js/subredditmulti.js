$(function() {
    function getMultiAttrs($el) {
        var path = $el.data('basepath').concat("/m/".concat($el.val()))
        return {multipath: $el.thing_id()}
    }

    function createSubredditMulti(e) {
        $(this).find(".status").html(reddit.status_msg.submitting).show()
        var $btn = $(this.parentNode).find('input')
        simple_post_form(this, "multi", getMultiAttrs($btn));
        return false;
    }

    $(document).on("click", ".subreddit-multireddit-list .multi-create", createSubredditMulti);
});
