"use client";

import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../../store/actions/authActions';
import '../../styles/AuthPage.css';

const AuthPageClient = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, loginError } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleToggleForm = () => setIsLogin(!isLogin);
  const handleCloseModal = () => {
    setShowModal(false);
    setShowErrorModal(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginUser(formData.email, formData.password))
        .then(() => {
          if (loginError) {
            setShowErrorModal(true);
          }
        });
    } else {
      if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
        alert('Tous les champs sont requis');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }
      dispatch(registerUser(formData.username, formData.email, formData.password))
        .then(() => {
          setShowModal(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-form-container">
        <h2>{isLogin ? 'Login' : 'Inscription'}</h2>
        {error && <p className="error">{error}</p>}
        <Form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <Form.Group controlId="formUsername">
              <Form.Label>Nom d'utilisateur</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom d'utilisateur"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required={!isLogin}
                autoComplete="off"
              />
              <Form.Control.Feedback type="invalid">
                Le nom d'utilisateur est requis.
              </Form.Control.Feedback>
            </Form.Group>
          )}
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              Un email valide est requis.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              Le mot de passe est requis.
            </Form.Control.Feedback>
          </Form.Group>
          {!isLogin && (
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmer le mot de passe"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={!isLogin}
                autoComplete="off"
              />
              <Form.Control.Feedback type="invalid">
                La confirmation du mot de passe est requise.
              </Form.Control.Feedback>
            </Form.Group>
          )}
          <Button variant="primary" type="submit" className="w-100 mt-3" disabled={loading}>
            {loading ? 'En cours...' : isLogin ? 'Login' : 'S\'inscrire'}
          </Button>
        </Form>
        <p className="toggle-link mt-3">
          {isLogin ? 'Not registered yet? ' : 'Already have an account? '}
          <span onClick={handleToggleForm} style={{ color: 'blue', cursor: 'pointer' }}>
            {isLogin ? 'Create an account' : 'Login'}
          </span>
        </p>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Inscription Réussie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Merci pour votre inscription. Vous êtes maintenant inscrit.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showErrorModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Erreur de Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Utilisateur non trouvé ou mot de passe incorrect</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AuthPageClient;
