var dark_mode = false;
var functional = false;
document.getElementById('note_box').style.color = 'white';

function dark() {
    if (dark_mode == false) {
        let back = document.getElementsByClassName('back');
        dark_mode = true;


        // General background switch
        for (let index = 0; index < back.length; index++) {
            back[index].style.background = '#707070';
            back[index].style.marginColor = '#707070';
        };

        // Background switch where Save button is
        back = document.getElementsByClassName('savedel');
        for (index = 0; index < back.length; index++) {
            back[index].style.background = '#707070';
            back[index].style.marginColor = '#707070';
        };

        // Textbox area switch
        back = document.getElementsByClassName('textbox');
        for (index = 0; index < back.length; index++) {
            back[index].style.background = '#909090';
        };

        // Notes background switch
        back = document.getElementsByClassName('notes');
        for (index = 0; index < back.length; index++){
            back[index].style.background = '#909090';
            back[index].style.marginColor = '#909090';
            back[index].style.color = '#ffffff';
        };

        let note_counter = 0;

        // Note item background switch
        while (note_counter < note_count) {
            document.getElementById('note' + note_counter).style.backgroundColor = '#909090';
            document.getElementById('note' + note_counter).style.color = '#ffffff';
            note_counter++;
        };
        note_counter = 0;
        document.getElementById('note_space').style.backgroundColor = '#909090';

        // Button switch
        document.getElementById('dark_button').innerText = 'Light Theme';
        document.getElementById('dark_button').style.backgroundColor = '#909090'
        document.getElementById('dark_button').style.borderColor = '#909090'
    }
    else {
        // Button revert
        document.getElementById('dark_button').innerText = 'Dark Theme';
        document.getElementById('dark_button').style.backgroundColor = 'rgb(70, 70, 70)'
        document.getElementById('dark_button').style.borderColor = 'rgb(70, 70, 70)'
        light();
    }
};

function light() {
    if (dark_mode == true) {
        let back = document.getElementsByClassName('back');
        dark_mode = false;

        // General background switch
        for (let index = 0; index < back.length; index++) {
            back[index].style.background = 'rgb(219, 219, 219)';
            back[index].style.marginColor = 'rgb(219, 219, 219)';
        };

        // Background switch where Save button is
        back = document.getElementsByClassName('savedel');
        for (index = 0; index < back.length; index++) {
            back[index].style.background = 'rgb(219, 219, 219)';
            back[index].style.marginColor = 'rgb(219, 219, 219)';
        };

        // Textbox area switch
        back = document.getElementsByClassName('textbox');
        for (index = 0; index < back.length; index++) {
            back[index].style.background = '#ffffff';
        };

        // Notes background switch
        back = document.getElementsByClassName('notes');
        for (index = 0; index < back.length; index++){
            back[index].style.background = '#ffffff';
            back[index].style.marginColor = '#ffffff';
            back[index].style.color = '#000000';
        };

        let note_counter = 0;
        // Note item background switch
        while (note_counter < note_count) {
            document.getElementById('note' + note_counter).style.backgroundColor = '#ffffff';
            document.getElementById('note' + note_counter).style.color = '#000000';
            note_counter++;
        };
        document.getElementById('note_space').style.backgroundColor = '#ffffff';
        note_counter = 0;

    }
}

let note_count = 0

function save(text) {
    if (functional == true) {
        let new_item = document.createElement('li');
        new_item.id = 'note' + note_count++;
        let content = document.createTextNode(text);
        new_item.appendChild(content);

        note_space = document.getElementById('note_space');
        note_space.appendChild(new_item);
        document.getElementById('note_box').value = '';

        if (dark_mode == true) {
            let note_counter = 0;
            console.log(note_count)
            // Note item background switch
            while (note_counter < note_count) {
                document.getElementById('note' + note_counter).style.backgroundColor = '#909090';
                document.getElementById('note' + note_counter).style.color = '#ffffff';
                note_counter++;
            };
            note_counter = 0;
        };
        cancel();
    };
};

function new_note() {
    functional = true
    document.getElementById('note_box').value = '';
    document.getElementById('note_box').style.color = 'black'
    document.getElementById('note_box').style.opacity = 1;
    document.getElementById('save_button').style.opacity = 1;
    document.getElementById('cancel_button').style.opacity = 1;
};

function cancel() {
    if (functional == true) {
        functional = false
        document.getElementById('note_box').value = '';
        document.getElementById('note_box').style.opacity = 0.2;
        document.getElementById('save_button').style.opacity = 0.2;
        document.getElementById('cancel_button').style.opacity = 0.2;
    };
};