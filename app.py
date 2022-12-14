from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['SECRET_KEY'] = 'YGBIYOLBLYIB132123667'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'wordlefake'
mysql = MySQL(app)

aidi = 0

def obtener():
    cur = mysql.connection.cursor()
    cur.execute('SELECT id, user, password FROM user')
    data = cur.fetchall()
    cur.close()
    return data

def getPalabra():
    global numPalabra
    may = mysql.connection.cursor()
    may.execute("SELECT palabra FROM user WHERE id = %s", [aidi])
    numPalabra = may.fetchall()
    may.close()
    cur = mysql.connection.cursor()
    cur.execute("SELECT palabra FROM palabras WHERE id = %s", [numPalabra])
    palabraUsuario = cur.fetchall()
    cur.close()
    print(numPalabra[0][0])
    return palabraUsuario

# TODO: Renderizado de templates siempre arriba
@app.route('/')
@app.route('/login.html')
def login():
    return render_template('login.html')

@app.route('/register.html')
def register():
    return render_template('register.html')

@app.route('/player.html')
def player():
    return render_template('player.html', palabra = getPalabra())

@app.route('/menu.html')
def menu():
    return render_template('menu.html')

@app.route('/acierto.html')
def acierto():
    return render_template('acierto.html')

@app.route('/reglas.html')
def reglamento():
    return render_template('reglas.html')

@app.route('/sugerencias.html')
def suggestion():
    return render_template('sugerencias.html')


# ! Trabajar los templates

@app.route('/sesion', methods = ['POST'])
def sesion():
    global aidi
    bandn = True
    bandp = True

    if request.method == 'POST':
        name = request.form['nombre']
        pasw = request.form['pass']
        data = obtener()

        for i in data:
            if name in i:
                bandn = True
                aidi = i[0]
                break
            else:
                bandn = False

        for j in data:
            if pasw in j:
                bandp = True
                break
            else:
                bandp = False
        
        if bandn == True:
            if bandp == True:
                return render_template('menu.html')
            
            else:
                flash('Error')
                return redirect(url_for('login'))
        else:
            flash('Error')
            return redirect(url_for('login'))
    return

@app.route('/register', methods = ['POST'])
def registrar():
    bandn = False
    if request.method == 'POST':
        name = request.form['nombre']
        pasw = request.form['pass']
        data = obtener()
        for i in data:
            if name in i:
                bandn = False
                break
            else:
                bandn = True
        if bandn == True:
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO user (user, password, palabra) VALUES (%s, %s, %s)", (name, pasw, 1))
            mysql.connection.commit()
            return redirect(url_for('login'))
        else:
            flash("Ya existe el usuario")
            return redirect(url_for("register"))


@app.route('/suggestion', methods = ['POST'])
def sugerencia():
    if request.method == 'POST':
        quack = request.form['sugerir']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO sugerencias (content, aidiuser) VALUES (%s, %s)", (quack, aidi))
        mysql.connection.commit()
        return redirect(url_for('menu'))


@app.route('/acierto')
def alAcertar():
    cur = mysql.connection.cursor()
    cur.execute("""
        UPDATE user
        SET palabra = %s
        WHERE id = %s
    """, [numPalabra[0][0]+1, aidi])
    cur.close()
    mysql.connection.commit()
    return render_template('acierto.html')



# ! Esta wea siempre al final
if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')