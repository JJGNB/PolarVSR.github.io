window.HELP_IMPROVE_VIDEOJS = false;

function initializeResultViewer() {
  $(".result-method").on("click", function() {
    var videoPath = $(this).data("video");
    var viewer = $(this).closest(".result-viewer");
    var video = viewer.find(".result-main-video").get(0);

    if (!video || !videoPath) {
      return;
    }

    viewer.find(".result-method").removeClass("is-active");
    $(this).addClass("is-active");

    $(video).find("source").attr("src", videoPath);
    video.load();
    video.play().catch(function() {});
  });
}

function initializeTableTabs() {
  $(".table-tab").on("click", function() {
    var targetId = $(this).data("table");

    $(".table-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".paper-table-panel").removeClass("is-active").attr("hidden", true);
    $("#" + targetId).addClass("is-active").removeAttr("hidden");
  });
}

function initializeBenchmarkTabs() {
  $(".benchmark-tab").on("click", function() {
    var targetId = $(this).data("benchmark");

    $(".benchmark-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".benchmark-panel").removeClass("is-active").attr("hidden", true);
    $("#" + targetId).addClass("is-active").removeAttr("hidden");
  });
}

$(document).ready(function() {
  initializeResultViewer();
  initializeBenchmarkTabs();
  initializeTableTabs();

  if (typeof bulmaSlider !== "undefined") {
    bulmaSlider.attach();
  }
});
