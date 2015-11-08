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

    function showMultiCreationTool(e) {
        var altthis = $(this)[0].nextSibling
        var createtool = $(this).parent().children('.multireddit')[0]
        $(this).hide()
        $(altthis).css("display", "inline-block")
        $(createtool).show()
        return false;
    }

    function hideMultiCreationTool(e) {
        var altthis = $(this)[0].previousSibling
        var createtool = $(this).parent().children('.multireddit')[0]
        $(this).hide()
        $(altthis).css("display", "inline-block")
        $(createtool).hide()
        return false;
    }

    $(document).on("click", ".multireddit-tool-toggle.show", showMultiCreationTool);
    $(document).on("click", ".multireddit-tool-toggle.hide", hideMultiCreationTool);
    $(document).on("click", ".subreddit-multireddit-list .multi-create", createSubredditMulti);
});
