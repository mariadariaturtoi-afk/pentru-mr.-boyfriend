
const startDate = new Date(); 

const totalDays = 11;

const letters = [
    "Ziua 1: Dragul meu Mihnea,
Este oficial prima zi din cele 11 pe care avem să le trăim separați unul de celalalt. Da, știu, sună dramatic, dar eu ieri am plâns până acasă în Uber, deci cred că pot fi iertată.
Sper din suflet că ești bine și că încerci să te uiți la această vacanță ca la o super experiență, decât ca la un chin absolut. Deși îmi e groaznic de greu, mă inveselește să te știu vizitând o țară așa frumoasă alături de ai tai. Știu că mă trădează cuvintele, dar nu sunteți CHIAR așa răi.
Aștept multe, multe poze și tot atâtea mesaje. Îmi e tare dor de tine și te iubesc incontestabil de mult.
A ta iubită, Maria.",
    "Ziua 2: Dragul meu Mihnea, 
2 zile, ce achievement. Până acum parcă nu e așa greu, nu…? NU?! 
Află despre mine că mi-am  ocupat intenționat ziua de astăzi cu “treburi” logistice care “trebuie” rezolvate înainte de plecarea mea în Bari. Pe scurt, ies la o cafea și fac drumuri toată ziua ca să nu am timp să mă gândesc la cât de greu îmi e fără tine. Nu știu dacă și tu ești la fel de ocupat din aceleași motive, dar dacă da mă bucur că am cu cine să-mi împart suferința. 
E frumos Madridul? Mergem și noi din banii pe care îi fac în Bitcoin? 
Îmi e dor de tine să știi și ce să vezi, azi parcă te iubesc chiar mai mult ca ieri. 
A ta iubită, Maria.",
    "Ziua 3: Dragul meu Mihnea,
Astăzi mă duc la unghii, mă simt și eu doamnă. Atâta ca e cam crunt să fiu pe drumuri încă de dimineață ca să ajung la 12:00 în Pipera. 
Abia aștept să le vezi, dar încă mai contemplez dacă să îți dau poză sau să fie surpriză, vorba vine, pe viu. Parcă mă tentează să mă țin de treaba asta cu “No Face No Show”. 
Oricum, dacă te îngrijorai de mine, află ca tot îmi e dor, chiar mai dor pe zi ce trece, dar acum sunt așa aproape de a pleca în vacanță încât nu mai am așa mult timp de depresie. Sper totuși ca tu ești bine și că te bucuri la maxim de vacanță. Te iubesc tare mult și abia aștept să ne revedem.
A ta iubită, Maria.",
    "Ziua 4: Dragul meu Mihnea,
Azi plec în Bari! Sunt tare încântată, de ce să mint. Avem zbor în jurul orei prânzului, deci nici nu trebuie să fiu up and running la prima oră de dimineață. 
Cred că o să fie bine, sau cel puțin așa sper. Mi-ar fi plăcut să vii cu mine, să mă vezi cum mă stresează aeroportul când nu am un adult mai responsabil care să “aibă grijă de mine” acolo, să mă admiri în ipostaza mea de om independent at its finest. Poate e mai bine ca măcar unul dintre noi să fi plecat singur până plecăm împreună, mai știe cineva cu ce se mănâncă lucrurile (EU). 
Cum îți priește Spania? Nu știu care este ziua în care plecați spre mare, dar dacă e asta, să nu uiți de playlist-urile de pe Apple Music făcute de mine anul trecut, use them for the road trip. 
Te iubesc tare mult Mihnea, și îmi e groaznic de dor de tine. Abia aștept să ne revedem.
A ta iubită, Maria.",
    "Ziua 5: Dragul meu Mihnea, 
Asta e prima mea zi în Italia, SINGURĂ! Îți vine să crezi? Acum un an și câteva luni mama nu mă lăsa să stau cu tine mai târziu de 23:00 și acum sunt în altă țară. Cred ca e prima data de când am făcut 18 când pot spune că mă simt adultă.
Îmi e dor de tine, să știi. Văd atâtea lucruri frumoase aici, atâtea lucruri pe care aș fi vrut să le văd cu tine, dar din păcate ne separă o mare și câteva sute de kilometrii acum. 
Oficial a început tanning contest, să știi. Te iubesc și guzlac!
A ta iubită, Maria.",
    "Ziua 6: Dragul meu Mihnea,
Am cam fost nonchalantă în ultimele mesaje, dar deja e prea mult. Îmi e extrem, EXTREM de dor de tine. Număr zilele ca la pușcărie, le scrijelesc aici, în pereții AirBNB-ului, și îmi plâng singură de milă. 
Nu știu de ce funcționează iubirea așa, dar simt ca de când ai plecat ea tot crește și tot crește. Asta nu ar fi o problemă dacă nu ar fi și dorul tot pe atât de mare, mai am puțin și cred ca o să explodez. 
I love you, my love. Abia aștept să ne vedem și să stau iar în brațele tale. 
A ta iubită, Maria.",
    "Ziua 7: Dragul meu Mihnea,
Sper ca ești bine și azi, căci deja am intrat în emisfera mai apropiată de finalul excursiei. Câteva sute de kilometrii între noi nu par chiar așa mult, mai ales prin comparație cu 14.000, dar tot e mult mai mult decât mi-ar plăcea. 
Îmi e dor să te simt lângă mine, să îți simt părul pe obrajii mei, mâinile pe mijlocul meu și buzele lipite strâns de ale mele. Îmi e dor de tine și de tot ce însemni și însemnăm. Mă simt cumva lipsită de o parte de mine când nu te am aproape, lucru care nu îmi place deloc. 
Mai avem puțin, doar câteva zile. Îmi e nespus de dor de tine și te iubesc până la luna și înapoi de un infinit de ori.
A ta iubită, Maria.",
    "Ziua 8: Dragul meu Mihnea,
Pentru mine a început deja numărătoarea inversă: mai sunt nici 4 zile până ne vedem. 
Nu aș putea să-ți zic în cuvinte cât de greu trece vacanța asta, simt ca durează o eternitate. Îmi dau cumva seama că poate nu r bine să fim așa atașați unul de celălalt, dar, în același timp, deja suntem. Ce mai putem să facem? 
Am învățat deja Bari pe de rost, doar vreau să vin acasă, la orice casă, și să stau cu tine. Te iubesc enorm de mult și abia aștept să ne vedem. 
A ta iubită, Maria.",
    "Ziua 9: Dragul meu Mihnea,
Mai sunt 3 zile până ne vedem! Mă întreb care dintre noi e mai negru… Aș vrea să spun ca eu, dar știu ca tu după 5 minute state la soare te înnegrești ca alții intr-un concediu, așa ca nu vreau sa fiu prea încrezătoare. 
Vreau sa îți dau tot ce am luat de aici ACUM, să facem un proper unboxing împreuna. Sunt chestii mici, nimic wow, dar sunt chestii luate gândindu-mă la tine. Sper din suflet ca o să îți placă și ție pe cat mi-au plăcut mie când le-am văzut.
Te iubesc enorm de mult și îmi este inexplicabil de dor de tine. Hai acasă…
A ta iubită, Maria.",
    "Ziua 10: Dragul meu Mihnea,
Mai sunt 2 zile. Pregătit să vii înapoi? Ce îmi e azi ce îmi e mâine oricum? Practic te-ai întors!
Am rezistat 10 zile unul fără celălalt deja, tu îți dai seama? Știu ca în teorie nu e mult, dar la început mi se părea ca e “the beginning of the end”, 11 zile care aveau să dureze o eternitate și încă pe atât. Acum tot ce am în minte e ca mâine noapte ne vedem.
A și, azi mă întorc în țară! Urează-mi mult, mult noroc cu pregătirile pentru când ne vedem. Promit ca fac tot ce îmi stă în putință să pară ca nu ai așteptat chiar degeaba această revedere. 
Vii acasă, omul meu frumos. Te iubesc.
A ta iubită, Maria.",
    "Ziua 11: Dragul meu Mihnea,
Azi te întorci acasăda"
];

const music = [
    "The Night We Met - Lord Huron", "Love Of My Life - Queen", "Zece - Florin Chilian", "Crazy Little Thing Called Love - Queen", "Bed Of Roses - Bon Jovi", "Electric Love - BORNS", "I Cant Handle Change - Roar", "As The World Caves In - Matt Maltese", "Cigarette Daydreams - Cage The Elephant", "Dark Red - Steve Lacy", "Love Of My Life - Queen"
];

// DOM elements
const openButton = document.getElementById("openButton");
const messageSection = document.getElementById("messageSection");
const lockedSection = document.getElementById("lockedSection");
const letterText = document.getElementById("letterText");
const dayTitle = document.getElementById("dayTitle");
const countdownEl = document.getElementById("countdown");
const musicButton = document.getElementById("musicButton");
const dayImage = document.getElementById("dayImage");

// Calculate current day
function getCurrentDay() {
    const now = new Date();
    const diffTime = now - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1; // Day 1 starts immediately
}

function updateCountdown() {
    const now = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + totalDays);

    const diff = endDate - now;

    if (diff <= 0) {
        countdownEl.innerText = "Ești acasă ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    countdownEl.innerText = `${days} days and ${hours} hours`;
}

function openLetter() {
    const day = getCurrentDay();

    if (day > totalDays) {
        letterText.innerText = "Ai deschis toate scrisorile❤️";
        showMessage();
        return;
    }

    const index = day - 1;

    if (index < letters.length) {
        dayTitle.innerText = `Day ${day}`;
        letterText.innerText = letters[index];

        dayImage.src = `images/day${day}.jpg.jpeg`;

        showMessage();

        triggerHearts();
    } else {
        showLocked();
    }
}

function showMessage() {
    messageSection.classList.remove("hidden");
    lockedSection.classList.add("hidden");
}

function showLocked() {
    messageSection.classList.add("hidden");
    lockedSection.classList.remove("hidden");
}

function triggerHearts() {
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerText = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.opacity = "0.8";
    heart.style.transition = "all 3s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.bottom = "100vh";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

musicButton.addEventListener("click", () => {
    const day = getCurrentDay() - 1;
    const track = music[day];

    if (!track) {
        alert("Astazi nu avem nicio melodie...");
        return;
    }

    const audio = new Audio(track);
    audio.play();
});

openButton.addEventListener("click", openLetter);

updateCountdown();
setInterval(updateCountdown, 1000 * 60);
