import question1 from '../assets/images/question1.svg';
import question2 from '../assets/images/question2.svg';
import question3 from '../assets/images/question3.svg';
import question4 from '../assets/images/question4.svg';
import question5 from '../assets/images/question5.svg';
import question6 from '../assets/images/question6.svg';
import q1 from '../assets/images/q1_question.png';
import q2 from '../assets/images/q2.png';
import q3 from '../assets/images/q3_question.png';
import q4 from '../assets/images/q4.png';
import q5 from '../assets/images/q5_question.png';
import q6 from '../assets/images/q6_question.png';

export const questions = [
    {
        id: 1,
        text: 'В апреле 2024 года компания ЛАНИТ-Интеграция завершила уникальный ' +
        'проект: сдала в эксплуатацию новый корпус Третьяковской галереи на Кадашевской набережной.\n\n' +
        'Здание нового корпуса музея украшают оригинальные скульптуры, работы современных российских скульпторов.',
        isTrue: false,
        correctAnswer: 'Здание нового корпуса украшают не оригинальные скульптуры, а оригинальные «картины-окна», на которые с помощью цифровой печати нанесли репродукции любимых всеми полотен русских художников.',
        incorrectAnswer: 'Здание нового корпуса украшают не оригинальные скульптуры, а оригинальные «картины-окна», на которые с помощью цифровой печати нанесли репродукции любимых всеми полотен русских художников.',
        pic: {
            src: q1,
            height: 334,
        },
        svg: {
            src: question1,
            height: 390,
            top: 277,
        }
    },
    {
        id: 2,
        text: 'В одном из бизнес-юнитов группы ЛАНИТ впервые в России был разработан конструктор по мотивам русских сказок.\n\n' +
        'Этот конструктор — обладатель первого места в номинации «Игрушки и игры» в национальной премии «Золотой медвежонок 2023».',
        isTrue: true,
        correctAnswer: 'Супер! Дистрибьютор детских игрушек Inventive Toys и сеть магазинов «Мир Кубиков» (Inventive Retail Group) запустили продажи российского бренда конструкторов Brick Labs.',
        incorrectAnswer: 'Дистрибьютор детских игрушек Inventive Toys и сеть магазинов «Мир Кубиков» (Inventive Retail Group) запустили продажи российского бренда конструкторов Brick Labs.',
        pic: {
            src: q2,
            height: 323,
        },
        svg: {
            src: question2,
            height: 379,
            top: 288,
        }
    },
    {
        id: 3,
        text: 'Одна из компаний группы ЛАНИТ запустила в производство тестовую' +
        'партию лёгких грузовых электромобилей для доставок по городу.',
        isTrue: true,
        correctAnswer: 'Да, всё так! Это электромобили от «Сова Моторс»',
        incorrectAnswer: 'Факт правдивый — это были электромобили от «Сова Моторс»',
        answerFont: 20,
        questionFont: 20,
        pic: {
            src: q3,
            height: 383,
        },
        svg: {
            src: question3,
            height: 394,
            top: 273,
        }
    },
    {
        id: 4,
        text: 'В одном из бизнес-юнитов в работу разработчиков интегрирован ' +
        'искусственный интеллект, который пишет весь исходный код за ' +
        'программистов. Разработчикам нужно только контролировать его работу и корректно описывать требования к задачам.',
        isTrue: false,
        correctAnswer: 'На самом деле искусственный интеллект может помогать, но код пишут сотрудники.',
        incorrectAnswer: 'Это ложь! Искусственный интеллект может лишь помогать, но код пишут сотрудники.',
        answerFont: 20,
        pic: {
            src: q4,
            height: 375,
        },
        svg: {
            src: question4,
            height: 392,
            top: 275,
        }
    },
    {
        id: 5,
        text: 'В ЛАНИТ есть отдельный департамент, занимающийся разработкой компьютерных игр для внутренних нужд.',
        isTrue: false,
        correctAnswer: 'Мы очень любим киберспорт, но пока только участвуем в турнирах и совместных тренировках в различных дисциплинах.',
        incorrectAnswer: 'Мы очень любим киберспорт, но пока только участвуем в турнирах и совместных тренировках в различных дисциплинах.',
        answerFont: 20,
        questionFont: 20,
        pic: {
            src: q5,
            height: 315,
        },
        svg: {
            src: question5,
            height: 380,
            top: 287,
        }
    },
    {
        id: 6,
        text: 'Сотрудники ЛАНИТ получили редкую возможность познакомиться с уникальными произведениями художников прямо ' +
        'в офисе компании. В музее ЛАНИТ можно увидеть оригинальные литографии Сальвадора Дали, Пабло Пикассо, Генри Мура.',
        isTrue: true,
        correctAnswer: 'Это абсолютная правда!',
        incorrectAnswer: 'Это правда! Можете увидеть их вживую',
        answerFont: 20,
        pic: {
            src: q6,
            height: 349,
        },
        svg: {
            src: question6,
            height: 398,
            top: 269,
        }
    },
]