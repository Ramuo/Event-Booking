import {Link} from "react-router-dom";
import {Form, Input, Button} from "antd"
import WelcomeContent from "./common/WelcomeContent";

const RegisterPage = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 lg:flex hidden">
        <WelcomeContent />
      </div>
      <div className="h-screen flex items-center justify-center">
        <Form
          className="flex flex-col gap-2 w-96"
          layout="vertical"
        >
          <h1 className="text-2xl font-bold text-gray-600">
            S'inscrire
          </h1>

          <Form.Item
            name="name"
            required
            label="Nom"
            rules={[{required: true, message: "Le Nom est requis"}]}
          >
            <Input placeholder="Nom" />
          </Form.Item>

          <Form.Item
            name="email"
            required
            label="Email"
            rules={[{required: true, message: "E-mail est requis"}]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            required
            label="Mot de Passe"
            rules={[{required: true, message: "Mot de passe est requis"}]}
          >
            <Input.Password placeholder="Mot de Passe" />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="mt-2">
            Envoyer
          </Button>

          <Link to="/login">Vous avez déjà un compte? Se connecter</Link>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;