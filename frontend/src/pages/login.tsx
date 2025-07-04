import { useState } from 'react';
import { signIn } from '../lib/auth';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setMessage('Login successful');
    } catch (err: any) {
      setMessage(err.message);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Login successful');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">Connexion</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-2 max-w-sm">
        <input
          className="border p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Se connecter</button>
      </form>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}
