
"use client";
import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import HeaderHome from "./header";
import { fetchPosts, deletePost } from '../services/api'; // Ensure API functions are defined
import PostForm from './postForm'; // Make sure this file exists in components folder
import Modal from './modal'; // Ensure this file is in the components folder


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPost, setEditPost] = useState(null);

  // Fetch posts when the component mounts and when the currentPage changes
  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts(currentPage, 5);
      setPosts(data);
    };
    loadPosts();
  }, [currentPage]);

  // Handle the delete post action
  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(post => post.id !== id)); // Update local posts list after deletion
  };

  // Handle page change for pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <HeaderHome />
      <div className='footer'>
        <div className='txf'>
          © 2024 GLYNNE TEC.
        </div>
      </div>

      {/* Introduction Section */}
      <section className="section2" id="section2">
        <div className="content">
          <h2 className="ttitle">TECHNICAL TEST</h2>
          <p className="sslogan">
            You need to build an application that lists paginated posts on startup. Each post should have a delete button, and respective forms for creating and updating a post should be provided, along with a modal window to notify the user of any operation performed.
          </p>
          <img
            className="image"
            id='img1'
            src="https://i.pinimg.com/originals/bc/13/f7/bc13f71bb68f52c0e206c5a5f4d41b47.gif"
            alt="Logística"
          />
        </div>
      </section>

      {/* Personal Introduction Section */}
      <section className="section2" id="section2">
        <div className="content">
          <div className='contex'>
            <h2 className="ttitle">Hi, i'm ALEXANDER</h2>
            <p className="sslogan">
              Full Stack Developer with over 2 years of experience in creating innovative technological solutions for web, mobile, and desktop. Specialized in React, Next.js, and Node.js with a focus on data processing and advanced architectures. Experienced in developing intuitive user interfaces and implementing efficient backend systems using SQL databases and cloud technologies such as Azure and AWS. Currently pursuing a degree in Systems Engineering at CUN, I excel in technical excellence and leading result-oriented projects.
            </p>
          </div>
          <img
            className="image2"
            id='img2'
            src="https://i.pinimg.com/736x/d1/bd/ac/d1bdacb0d4171041ffc115602851e235.jpg"
            alt="Logística"
          />
        </div>
      </section>

      {/* Posts Section */}
      <section className="section" id="section1">
        <div className='crearPost'>
          <h1>Lista de Posts</h1>
          <button onClick={() => { setIsModalOpen(true); setEditPost(null); }}>Crear Post</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Tittle</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => { setIsModalOpen(true); setEditPost(post); }}>Edit</button>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination controls */}
        <div className='ButtonNext'>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Back</button>
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
      </section>

      {/* Modal for creating/editing a post */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <PostForm post={editPost} onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}

      {/* Footer Section */}
      <section className="section4" id="section4">
        <div className="content4">
          <div className="info4">
            <h2 className="info-title4">Línea Ética</h2>
            <ul className="info-list4">
              <li className="info-item4"><a href="#" className="info-link4">Proveedores</a></li>
              <li className="info-item4"><a href="#" className="info-link4">Trabaja en ISA</a></li>
              <li className="info-item4"><a href="#" className="info-link4">Términos legales</a></li>
              <li className="info-item4"><a href="#" className="info-link4">CREG 080 de 2019</a></li>
              <li className="info-item4"><a href="#" className="info-link4">Protección de datos</a></li>
              <li className="info-item4"><a href="#" className="info-link4">Notificaciones judiciales</a></li>
              <li className="info-item4"><a href="#" className="info-link4">Contáctanos</a></li>
              <li className="info-item4"><a href="#" className="info-link4">Transparencia y acceso a la información</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="social-media4">
            <h3 className="social-title4">Síguenos en redes sociales</h3>
            <p className="social-handle4">@ISAConexiones</p>
            <div className="social-icons4">
              <a href="#" className="social-link4">Facebook</a>
              <a href="#" className="social-link4">YouTube</a>
              <a href="#" className="social-link4">Instagram</a>
              <a href="#" className="social-link4">LinkedIn</a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info4">
            <h3 className="contact-title4">Líneas de Atención Accionista:</h3>
            <p className="contact-detail4">Medellín: +57 (604) 444 7231</p>
            <p className="contact-detail4">Resto del país: 01 8000 954 242</p>
            <p className="contact-detail4">Sede: Carrera 48 No. 26 – 85 Piso 1, Torre Sur, Sucursal Puerta del Río en Medellín – Colombia</p>
            <p className="contact-detail4">Contacto sede principal: Calle 12 sur N° 18 -168. Medellín - Colombia</p>
            <p className="contact-detail4">+57 (604) 325 22 70</p>
            <p className="contact-detail4"><a href="mailto:isa@isa.com.co" className="contact-link4">isa@isa.com.co</a></p>
            <p className="contact-detail4">Lunes a viernes de 8:00 a.m. a 5:00 p.m.</p>
            <p className="contact-detail4">En cumplimiento del Decreto 491 de 2020, todos los requerimientos de la ciudadanía serán atendidos a través de: <a href="mailto:notificacionesjudicialesisa@ISA.com.co" className="contact-link4">notificacionesjudicialesisa@ISA.com.co</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
