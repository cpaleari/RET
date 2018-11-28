# RET
overzichtpagina verhalen RET
hallo

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>RET verhalen</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
    <header>
        <img src="images/RET-logo.jpg" alt="logo van RET">
        <h1>De RET verhalen site</h1>
        <form action="">
            <label for="zoeken">Zoeken</label>
            <input type="search" name="zoeken" id="zoeken">
        </form>
    </header>
    <main>
        <section id="uitgelicht">
            <article>
                <h2>Uitgelicht</h2>
                <a href="">
                    <h3>Haiku</h3>
                    <p>Verhaal van de dag</p>
                </a>
            </article>

        </section>

        <section>
            <h2>De verhalen</h2>
            <article>
                <a href="">
                    <h3>Interview</h3>
                    <img src="images/interview-647-x--404_011616120909.jpg" alt="interview" id="voorproefverhaal">
                    <p>De avond valt. In de verte het hongerige geblaf een roedel bloedhonden op zoek naar een ontsnapte gevangene. Wij zitten binnen. Plaid over de benen, een gin-tonic binnen handbereik. Naast mij zit ikzelf, Max J. Molovich. Levensgenieter, goeroe zonder volgelingen, zorgzame vader. Max, we hebben van te voren afgesproken elkaar te tutoyeren.</p>
                    <footer></footer>
                    <!--hier komt de metadata-->
                </a>


            </article>
        </section>
        <form action="">
            <label for="sorteer">Sorteren:</label>
            <select name="sorteren" id="sorteer">
                <option value="nieuwst">Nieuw</option>
                <option value="a-z">A-Z</option>
                <option value="beoordeling">Best beoordeeld</option>
                <option value="populair">Populairste</option>
            </select>
            <p>Emotie</p>
            <input type="checkbox" name="emotie" value="blij" id="blij">
            <label for="blij">Blij</label>
            <input type="checkbox" name="emotie" value="boos" id="boos">
            <label for="boos">Boos</label>
            <input type="checkbox" name="emotie" value="droevig" id="droevig">
            <label for="droevig">Droevig</label>
            <input type="checkbox" name="emotie" value="angst" id="angst">
            <label for="angst">Angst</label>
            <input type="checkbox" name="emotie" value="verward" id="verward">
            <label for="verward">Verward</label>
            <input type="checkbox" name="emotie" value="geirriteerd" id="geirriteerd">
            <label for="geirriteerd">Geirriteerd</label>
            <input type="checkbox" name="emotie" value="neutraal" id="neutraal">
            <label for="neutraal">Neutraal</label>
            <input type="checkbox" name="emotie" value="ongemakkelijk" id="ongemakkelijk">
            <label for="ongemakkelijk">ongemakkelijk</label>
            <input type="checkbox" name="emotie" value="enthousiast" id="enthousiast">
            <label for="enthousiast">Enthousias</label>
        </form>
    </main>

    <footer></footer>
</body>

</html>

