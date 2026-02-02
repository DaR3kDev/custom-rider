import { useState } from 'react'
import { GalleryVerticalEnd, Eye, EyeOff } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/shared/ui/field'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  return (
    <div className={cn('flex flex-col gap-6')}>
      <form>
        <FieldGroup>
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Custom Rider</span>
            </a>

            <h1 className="text-xl font-bold">Bienvenido a Custom Rider</h1>
          </div>

          {/* Usuario */}
          <Field>
            <FieldLabel htmlFor="username">Usuario</FieldLabel>
            <Input id="username" type="text" placeholder="usuario" required />
          </Field>

          {/* Contraseña */}
          <Field>
            <FieldLabel htmlFor="password">Contraseña</FieldLabel>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="contraseña"
                required
                className="pr-10"
              />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                className="absolute right-2 top-1/2 -translate-y-1/2 shadow-none hover:bg-transparent focus-visible:ring-0 
                focus-visible:ring-offset-0"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </Button>
            </div>
          </Field>

          {/* Botón de inicio de sesión */}
          <Field>
            <Button type="submit" className="w-full">
              Iniciar sesión
            </Button>
          </Field>
        </FieldGroup>
      </form>

      {/* Footer */}
      <FieldDescription className="px-6 text-center">
        Al hacer clic en iniciar sesión, aceptas nuestros <a href="#">Términos de Servicio</a> y{' '}
        <a href="#">Política de Privacidad</a>
      </FieldDescription>
    </div>
  )
}
