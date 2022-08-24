---
title: 魁拔妖侠传
---
{% tabs video %}
<!-- tab bilibili -->
<div class="video-container bilibili"><iframe class="iframe-moive bilibili" src="https://player.bilibili.com/player.html?aid=10580295&bvid=BV1Fx411v7n9&cid=17466141&page=1" frameborder="0" allowfullscreen="true"></iframe></div>
{% button javascript:;, 1, fa bilibili %} {% button javascript:;, 2, fa bilibili %} {% button javascript:;, 3, fa bilibili %} {% button javascript:;, 4, fa bilibili %} {% button javascript:;, 5, fa bilibili %} {% button javascript:;, 6, fa bilibili %} {% button javascript:;, 7, fa bilibili %} {% button javascript:;, 8, fa bilibili %} {% button javascript:;, 9, fa bilibili %} {% button javascript:;, 10, fa bilibili %} {% button javascript:;, 11, fa bilibili %} {% button javascript:;, 12, fa bilibili %} {% button javascript:;, 13, fa bilibili %} {% button javascript:;, 14, fa bilibili %} {% button javascript:;, 15, fa bilibili %} {% button javascript:;, 16, fa bilibili %} {% button javascript:;, 17, fa bilibili %} {% button javascript:;, 18, fa bilibili %} {% button javascript:;, 19, fa bilibili %} {% button javascript:;, 20,  fa bilibili %}
<script>
  var bilibili = document.getElementsByClassName("bilibili");
  var bilibiliIframe = document.getElementsByClassName("iframe-moive bilibili")[0];
  for(var i = 0; i < bilibili.length; i++) {
    bilibili[i].parentElement.onclick = function () {
      var bilibiliURL = new URL(bilibiliIframe.src);
      bilibiliURL.searchParams.set("page", this.innerText);
      bilibiliIframe.src = bilibiliURL.href;
    }
  }
</script>
<style>
.video-container.bilibili {
  padding-top: 65.00% !important;
}
</style>
<!-- endtab -->
{% endtabs %}

# 声明
本页面负责记录需要引用的魁拔作品的源出处，页面存在内容均以超链接跳转、合法的嵌入框嵌入或授权引用。

# 历史贡献
{% history %}