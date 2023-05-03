import { useEffect } from "react";
import { publics, users } from "../api/api";

const Profile=()=>{
	const local = localStorage.getItem('id');
    const Logged = () =>{
        if(local == null){
            window.location.href = '/';
        }
    }
    useEffect(()=>{
        Logged();
    },[])
	const userDetails = users.filter(i => i.id == local);
	const posts = publics.filter(i => i.user_id == local);
    return(
        <div>

            <div className="container-fluid">
                <div className="row  border">
                    <div className="col-5 text-center my-3">
                        <img src="https://www.instagram.com/static/images/web/	logged_out_wordmark.png/7a252de00b20.png" height="30"></img>
                    </div>
                    <div className="col-3 my-3">
                        <input type="" name="" placeholder="Поиск" className="form-control"/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3 my-3">
                        <h5>
                        <a href="/lenta" className="text-dark"><i className="fa-solid fa-house"></i></a>
                        <a href="/chat" className="text-dark"><i className="fa-solid fa-comment ms-3"></i></a>
                        <i className="fa-solid fa-square-plus ms-3"></i>
                        <i className="fa-solid fa-compass ms-3 text-dark"></i>
                        <a href="/like"><i className="fa-solid fa-heart ms-3 text-dark"></i></a>
                        <a href="/profile" className="text-dark"><i className="fa-solid fa-user ms-3"></i></a>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="col-12">
				<div className="row">
					<div className="col-2"></div>
					<div className="col-3 mt-3">
						<img style={{borderRadius : 90}} src={userDetails[0].avatar} width={180} height={180} ></img> 
					</div>
					<div className="col-4 mt-4">
						<div className="row">
							<div className="col-3">
							<h3>{userDetails[0].nickname}</h3>
						</div>
						<div className="col-7">
							<a href="/setting"><button className="bg-light text-dark ml-3">Редактировать профил</button></a>
						</div>
						<div className="col-2">
							<a href="/profilesetting"><i className="fa-solid fa-gear ml-3"></i></a>
						</div>
						<div className="col-4 text-center"><b>{posts.length}публикации</b></div>
						<div className="col-4 text-center"><b><a href="/followers">подписчиков</a></b></div>
						<div className="col-4 text-center"><b><a href="/following">подписок</a></b></div>
					</div>
					<div className="col-1"></div>
			    </div>
            </div>
        </div>
		<div className="col-12">
				<div className="row">
					<div className="col-3"></div>
					<div className="col-6">
						<nav>
						  <div className="nav nav-tabs" id="nav-tab" role="tablist">
						    <a className="nav-link active text-dark" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fa-solid fa-table-cells mr-1"></i>ПУБЛИКАЦИИ</a>
						    <a className="nav-link text-dark" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i className="fa-solid fa-bookmark mr-1"> </i>СОХРАНЕНИЕ</a>
						    <a className="nav-link text-dark" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i className="fa-solid fa-id-card-clip mr-1"> </i>ОТМЕТКИ</a>
						  </div>
						</nav>
						<div className="tab-content" id="nav-tabContent">
						  <div className="tab-pane fade show active text-center" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
							<div className="row">
								{posts.length > 0 ?
								<>
								{posts.map((item) =>
								<div className="col-4">
									<a href={"/post/"+ item.id}>
										<img  src={item.image[0]} height={160} width={200}></img>
									</a>
								</div>
								)
								}
								</>
								:
								<div className="col-12 text-center">Нет публикаций</div>
								}
								
							</div>
						  </div>
						  <div className="tab-pane fade text-center" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
					
						  </div>
						  <div className="tab-pane fade text-center" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">					  	

						  </div>
						  </div>
						</div>
					</div>
					<div className="col-3"></div>
				</div>
			</div>
    );
}
export default Profile;