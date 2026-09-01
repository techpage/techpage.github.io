const scenes = [
  { slug: "bedroom-1", group: "bedrooms", title: "Bedroom 1", caption: "A bedroom with a bed, wardrobe, desk, chairs, and storage furniture." },
  { slug: "bedroom-2", group: "bedrooms", title: "Bedroom 2", caption: "A bedroom with a bed, sofa, wardrobe, shelving, and small tables." },
  { slug: "bedroom-3", group: "bedrooms", title: "Bedroom 3", caption: "A bedroom with a bed, wardrobe, armchair, desk, and side tables." },
  { slug: "bedroom-4", group: "bedrooms", title: "Bedroom 4", caption: "A bedroom with a bed, desk, chair, bookshelf, and storage cabinets." },
  { slug: "living-room-1", group: "living-rooms", title: "Living Room 1", caption: "A living room with sofas, armchairs, coffee tables, and a television stand." },
  { slug: "living-room-2", group: "living-rooms", title: "Living Room 2", caption: "A living room with sofas, a coffee table, shelving, and side tables." },
  { slug: "living-room-3", group: "living-rooms", title: "Living Room 3", caption: "A living room with a sofa set, coffee table, display cabinet, and chairs." },
  { slug: "dining-room-1", group: "dining-rooms", title: "Dining Room 1", caption: "A dining room with a dining table, chairs, a sideboard, and a display cabinet." },
  { slug: "dining-room-2", group: "dining-rooms", title: "Dining Room 2", caption: "A dining room with a dining table, chairs, storage cabinets, and a serving table." },
  { slug: "kindergarten-1", group: "kindergartens", title: "Kindergarten 1", caption: "A kindergarten classroom with activity tables, small chairs, storage shelves, and play areas." },
  { slug: "kindergarten-2", group: "kindergartens", title: "Kindergarten 2", caption: "A kindergarten classroom with activity tables, seating, storage, and play equipment." },
  { slug: "kindergarten-3", group: "kindergartens", title: "Kindergarten 3", caption: "A kindergarten classroom with tables, chairs, book storage, and activity zones." },
  { slug: "library-1", group: "libraries", title: "Library 1", caption: "A library with bookshelves, reading tables, chairs, and storage cabinets." },
  { slug: "library-2", group: "libraries", title: "Library 2", caption: "A library with bookcases, reading desks, lounge chairs, and display tables." },
  { slug: "music-room-1", group: "music-rooms", title: "Music Room 1", caption: "A music room with a piano, instruments, chairs, music stands, and storage." },
  { slug: "music-room-2", group: "music-rooms", title: "Music Room 2", caption: "A music room with a piano, drum set, seating, and instrument storage." },
  { slug: "music-room-3", group: "music-rooms", title: "Music Room 3", caption: "A music room with instruments, music stands, chairs, and storage cabinets." },
  { slug: "student-dormitory-1", group: "student-dormitories", title: "Student Dormitory 1", caption: "A student dormitory with beds, desks, chairs, wardrobes, and storage." },
  { slug: "student-dormitory-2", group: "student-dormitories", title: "Student Dormitory 2", caption: "A student dormitory with two beds, study desks, chairs, and wardrobes." },
  { slug: "student-dormitory-3", group: "student-dormitories", title: "Student Dormitory 3", caption: "A student dormitory with beds, desks, bookshelves, chairs, and storage cabinets." },
  { slug: "student-dormitory-4", group: "student-dormitories", title: "Student Dormitory 4", caption: "A student dormitory with a bed, study desk, chair, wardrobe, and storage." },
  { slug: "tea-house-1", group: "tea-houses", title: "Tea House 1", caption: "A tea house with a tea table, seats, display shelves, and tea accessories." },
  { slug: "tea-house-2", group: "tea-houses", title: "Tea House 2", caption: "A tea house with low tea tables, cushions, display cabinets, and decorative screens." },
  { slug: "tea-house-3", group: "tea-houses", title: "Tea House 3", caption: "A tea house with a tea table, chairs, shelves, and a tea display area." },
  { slug: "roadway", group: "outdoor", title: "Roadway", caption: "An urban roadway with buildings, road lanes, trees, and traffic objects." },
  { slug: "intersection", group: "outdoor", title: "Intersection", caption: "An urban intersection with multi-directional roads, buildings, trees, and traffic objects." },
  { slug: "industrial-logistics-loading-facility", group: "outdoor", title: "Industrial Logistics Loading Facility", caption: "An industrial logistics loading facility with warehouses, loading bays, trucks, and circulation space." }
];

const gallery = document.querySelector("#scene-gallery");

function sceneMarkup(scene) {
  return `
    <article class="scene-card" data-group="${scene.group}">
      <div class="scene-video-shell">
        <video class="scene-video" muted loop playsinline preload="metadata" aria-label="${scene.title}: ${scene.caption}">
          <source src="assets/media/${scene.slug}.mp4" type="video/mp4">
          <img src="assets/media/${scene.slug}.gif" alt="${scene.title}: ${scene.caption}">
        </video>
        <button class="scene-control" type="button" aria-label="Pause ${scene.title}"><i data-lucide="pause" aria-hidden="true"></i></button>
      </div>
      <h3>${scene.title}</h3>
      <p>${scene.caption}</p>
    </article>
  `;
}

gallery.innerHTML = scenes.map(sceneMarkup).join("");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setControlIcon(control, video, title) {
  const isPaused = video.paused;
  control.setAttribute("aria-label", `${isPaused ? "Play" : "Pause"} ${title}`);
  control.innerHTML = `<i data-lucide="${isPaused ? "play" : "pause"}" aria-hidden="true"></i>`;
  refreshIcons();
}

function toggleVideo(video, control, title) {
  if (video.paused) {
    video.dataset.userPaused = "false";
    video.play().catch(() => {});
  } else {
    video.dataset.userPaused = "true";
    video.pause();
  }
  window.setTimeout(() => setControlIcon(control, video, title), 0);
}

const cards = [...gallery.querySelectorAll(".scene-card")];

cards.forEach((card) => {
  const video = card.querySelector(".scene-video");
  const control = card.querySelector(".scene-control");
  const title = card.querySelector("h3").textContent;

  video.addEventListener("click", () => toggleVideo(video, control, title));
  control.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleVideo(video, control, title);
  });
  video.addEventListener("play", () => setControlIcon(control, video, title));
  video.addEventListener("pause", () => setControlIcon(control, video, title));
});

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) {
      target.pause();
      return;
    }
    if (target.dataset.userPaused !== "true") {
      target.play().catch(() => {});
    }
  });
}, { threshold: 0.35 });

cards.forEach((card) => videoObserver.observe(card.querySelector(".scene-video")));

const filterButtons = [...document.querySelectorAll(".filter-button")];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    cards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.group === filter;
      card.hidden = !isVisible;
      const video = card.querySelector(".scene-video");
      if (!isVisible) {
        video.pause();
      } else if (video.dataset.userPaused !== "true") {
        video.play().catch(() => {});
      }
    });
  });
});

refreshIcons();
