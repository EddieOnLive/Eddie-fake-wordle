
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')

@app.route('/login',methods = ['POST'])
def sesion():

    if request.method == 'POST':
        name = request.form['nombre']
        pasw = request.form['pass']
        data = obtener()

        for i in data:
            if name in i:
                bandn = True
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
                return render_template('')
            
            else:
                flash('Nombre o contraseña incorrectos')
                return redirect(url_for('login'))
    return

